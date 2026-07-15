import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"衡园小鲸｜哈工程新生校园智能体",description:"哈尔滨工程大学本科新生的一站式校园生活助手：查资源、办业务、排日程、不错过重要节点。"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
