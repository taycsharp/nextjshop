import sessionChecker from "~/lib/sessionPermission";
import attributeModel from "~/models/attributes";
import categoryModel from "~/models/category";
import colorModel from "~/models/colors";
import couponModel from "~/models/coupon";
import orderModel from "~/models/order";
import productModel from "~/models/product";
import userModel from "~/models/user";
import dbConnect from "~/utils/dbConnect";

export default async function apiHandler(req, res) {
  const { method } = req;
  if (!(await sessionChecker(req, "general")))
    return res
      .status(403)
      .json({ success: false, message: "Access Forbidden" });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const year = new Date().getFullYear();
        const date = new Date(`${year}-01-01`);
        const order = await orderModel.aggregate([
          {
            $match: {
              $and: [
                {
                  orderDate: {
                    $gte: date,
                  },
                },
              ],
            },
          },
          {
            $group: {
              _id: {
                year: { $year: "$orderDate" },
                month: { $month: "$orderDate" },
              },
              results: { $count: {} },
            },
          },
        ]);

        const monthlyData = Array(12).fill().map(() => ({ sales: 0, profit: 0 }));
        const orders = await orderModel.find({
          orderDate: {
            $gte: date,
            $lt: new Date(`${year + 1}-01-01`),
          },
        });

        console.log(orders[0].products);

        // Calculate sales and profit for each month
        for (let ord of orders) {
          for (let product of ord.products) {
            // Fetch product details
            const productDetails = await productModel.findById(product._id).select("price costPrice");

            if (productDetails) {
              const costPrice = productDetails.costPrice || 0;
              const salesAmount = product.price * product.qty;
              const profit = (product.price - costPrice) * product.qty;

              const monthIndex = ord.orderDate.getMonth(); // months are 0-indexed

              monthlyData[monthIndex].sales += salesAmount;
              monthlyData[monthIndex].profit += profit;
            }
          }
        }

        const salesByMonth = await orderModel.aggregate([
          {
            $match: {
              orderDate: {
                $gte: new Date(`${year}-01-01`),
                $lt: new Date(`${year + 1}-01-01`),
              },
            },
          },
          {
            $group: {
              _id: {
                year: { $year: "$orderDate" },
                month: { $month: "$orderDate" },
              },
              total: { $sum: "$payAmount" },
            },
          },
          {
            $group: {
              _id: "$_id.year",
              monthlySales: {
                $push: {
                  month: "$_id.month",
                  total: "$total",
                },
              },
            },
          },
          {
            $project: {
              _id: 0,
              year: "$_id",
              monthlySales: 1,
            },
          },
        ]);

        const orderCountByStatus = await orderModel.aggregate([
          {
            $match: {
              orderDate: {
                $gte: new Date(`${year}-01-01`),
                $lt: new Date(`${year + 1}-01-01`),
              },
            },
          },
          {
            $group: {
              _id: "$status",
              count: { $sum: 1 },
            },
          },
        ]);

        const countByStatus = {
          year: year,
          orderCounts: {
            Pending: 0,
            "In Progress": 0,
            Packaged: 0,
            Shipped: 0,
            Delivered: 0,
            Canceled: 0,
          },
        };

        // Populate the result object with the counts
        orderCountByStatus.forEach((statusCount) => {
          const status = statusCount._id;
          const count = statusCount.count;
          countByStatus.orderCounts[status] = count;
        });

        const totalOrder = await orderModel.estimatedDocumentCount();
        const totalUser = await userModel.estimatedDocumentCount();
        const totalCategory = await categoryModel.estimatedDocumentCount();
        const totalColor = await colorModel.estimatedDocumentCount();
        const totalCoupon = await couponModel.estimatedDocumentCount();
        const totalAttribute = await attributeModel.estimatedDocumentCount();
        res.status(200).json({
          success: true,
          order,
          monthlyData,
          salesByMonth,
          totalOrder,
          totalUser,
          totalCategory,
          totalColor,
          totalCoupon,
          totalAttribute,
          orderCountByStatus: countByStatus,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
