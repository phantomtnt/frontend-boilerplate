import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { NODE_ENV } from "./config";
import { htmlIndex } from "./plugins/html";
import { spritesheet } from "./plugins/assets";
import {
  define,
  HMR,
  hashedModuleIds,
  banner,
  buildInfo
} from "./plugins/utils";

export default [
  define,
  NODE_ENV === "development" ? HMR : 0,
  NODE_ENV === "production" ? hashedModuleIds : 0,
  htmlIndex,
  new MiniCssExtractPlugin({
    filename: NODE_ENV !== "production" ? "[name].css" : "[name].[hash].css",
    chunkFilename: NODE_ENV !== "production" ? "[id].css" : "[id].[hash].css"
  }),
  spritesheet,
  NODE_ENV === "production" ? banner : 0,
  NODE_ENV === "production" ? buildInfo : 0
].filter(Boolean);
