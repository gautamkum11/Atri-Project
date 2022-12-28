import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div3 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useDiv10Cb, useFlex44Cb, useFlex45Cb, useFlex47Cb, useFlex51Cb, useDiv11Cb, useFlex49Cb, useFlex53Cb, useFlex52Cb, useFlex55Cb, useFlex54Cb, useFlex57Cb, useFlex56Cb, useFlex59Cb, useFlex58Cb, useFlex61Cb, useFlex60Cb, useTextBox52Cb, useTextBox53Cb, useTextBox54Cb, useImage36Cb, useTextBox57Cb, useTextBox56Cb, useTextBox58Cb, useTextBox59Cb, useImage37Cb, useTextBox61Cb, useTextBox62Cb, useImage38Cb, useTextBox60Cb, useTextBox64Cb, useTextBox65Cb, useImage39Cb, useTextBox63Cb, useTextBox67Cb, useTextBox68Cb, useTextBox66Cb, useImage40Cb, useTextBox70Cb, useTextBox71Cb, useTextBox69Cb, useImage41Cb } from "../page-cbs/blogs";
import "../page-css/blogs.css";
import "../custom/blogs";

export default function Blogs() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div10Props = useStore((state)=>state["blogs"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["blogs"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Flex44Props = useStore((state)=>state["blogs"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["blogs"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex45Props = useStore((state)=>state["blogs"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["blogs"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex47Props = useStore((state)=>state["blogs"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["blogs"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex51Props = useStore((state)=>state["blogs"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["blogs"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Div11Props = useStore((state)=>state["blogs"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["blogs"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Flex49Props = useStore((state)=>state["blogs"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["blogs"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex53Props = useStore((state)=>state["blogs"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["blogs"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex52Props = useStore((state)=>state["blogs"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["blogs"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex55Props = useStore((state)=>state["blogs"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["blogs"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex54Props = useStore((state)=>state["blogs"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["blogs"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex57Props = useStore((state)=>state["blogs"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["blogs"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex56Props = useStore((state)=>state["blogs"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["blogs"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex59Props = useStore((state)=>state["blogs"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["blogs"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex58Props = useStore((state)=>state["blogs"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["blogs"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex61Props = useStore((state)=>state["blogs"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["blogs"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex60Props = useStore((state)=>state["blogs"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["blogs"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const TextBox52Props = useStore((state)=>state["blogs"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["blogs"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["blogs"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["blogs"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["blogs"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["blogs"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Image36Props = useStore((state)=>state["blogs"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["blogs"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox57Props = useStore((state)=>state["blogs"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["blogs"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox56Props = useStore((state)=>state["blogs"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["blogs"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox58Props = useStore((state)=>state["blogs"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["blogs"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["blogs"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["blogs"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const Image37Props = useStore((state)=>state["blogs"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["blogs"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox61Props = useStore((state)=>state["blogs"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["blogs"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["blogs"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["blogs"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Image38Props = useStore((state)=>state["blogs"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["blogs"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox60Props = useStore((state)=>state["blogs"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["blogs"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox64Props = useStore((state)=>state["blogs"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["blogs"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["blogs"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["blogs"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Image39Props = useStore((state)=>state["blogs"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["blogs"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox63Props = useStore((state)=>state["blogs"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["blogs"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox67Props = useStore((state)=>state["blogs"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["blogs"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["blogs"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["blogs"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox66Props = useStore((state)=>state["blogs"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["blogs"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Image40Props = useStore((state)=>state["blogs"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["blogs"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox70Props = useStore((state)=>state["blogs"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["blogs"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["blogs"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["blogs"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox69Props = useStore((state)=>state["blogs"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["blogs"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const Image41Props = useStore((state)=>state["blogs"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["blogs"]["Image41"]);
const Image41Cb = useImage41Cb()

  return (<>
  <Div3 className="p-blogs Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<Flex3 className="p-blogs Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Div3 className="p-blogs Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<Flex3 className="p-blogs Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox3 className="p-blogs TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex3>
<Flex3 className="p-blogs Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox3 className="p-blogs TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox3 className="p-blogs TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<Flex3 className="p-blogs Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox3 className="p-blogs TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<Image2 className="p-blogs Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-blogs Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<TextBox3 className="p-blogs TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox3 className="p-blogs TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Flex3 className="p-blogs Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<TextBox3 className="p-blogs TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<Image2 className="p-blogs Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-blogs Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox3 className="p-blogs TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox3 className="p-blogs TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Flex3 className="p-blogs Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<TextBox3 className="p-blogs TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<Image2 className="p-blogs Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-blogs Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox3 className="p-blogs TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox3 className="p-blogs TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Flex3 className="p-blogs Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox3 className="p-blogs TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Image2 className="p-blogs Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-blogs Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<TextBox3 className="p-blogs TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox3 className="p-blogs TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<Flex3 className="p-blogs Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox3 className="p-blogs TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<Image2 className="p-blogs Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Flex3>
</Flex3>
</Div3>
<Flex3 className="p-blogs Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex3 className="p-blogs Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox3 className="p-blogs TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox3 className="p-blogs TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<Flex3 className="p-blogs Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Image2 className="p-blogs Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<TextBox3 className="p-blogs TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
</Div3>
  </>);
}
