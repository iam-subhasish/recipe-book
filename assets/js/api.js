"use strict";

import { ACCESS_POINT } from "./config.js";


export const fetchData = async function (queries, successCallback) {
  const query = queries
    ?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "20%")
    .replace(/\+/g, "2B%");

  const url = `${ACCESS_POINT}?${query ? `&${query}` : ""}`;
 

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }
};
