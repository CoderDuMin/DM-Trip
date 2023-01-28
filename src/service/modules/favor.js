import dmRequest from "../request";


export function getFavorList() {
  return dmRequest.get({
    url: "/favor/list",
  });
}
export function getHistoryList() {
  return dmRequest.get({
    url: "/favor/history",
  });
}
