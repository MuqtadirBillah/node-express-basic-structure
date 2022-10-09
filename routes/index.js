const { Router: expressRouter } = require("express");
const router = expressRouter();

// auth routes
const authRouter = require("./authRoutes");
router.use("/auth", authRouter);

module.exports = router;