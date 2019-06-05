import Mock from "mockjs";

Mock.mock("/data", {
  code: 0,
  data: {
    title: "title"
  },
  message: "操作成功"
});
