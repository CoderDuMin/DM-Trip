import dmRequest from "../request";
// type=pend 未完成订单
// type=recent 最近订单
// type=all 全部订单
export function getOrderList(type = "all") {
  return dmRequest.get({
    url: `/order/list?type=${type}`,
  });
}
