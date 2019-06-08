import Mock from "mockjs";

Mock.mock("/data", {
  code: 0,
  data: [1, 2, 3],
  message: "操作成功"
});
