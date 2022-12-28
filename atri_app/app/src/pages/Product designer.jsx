import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div4 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useDiv12Cb, useFlex62Cb, useFlex63Cb, useFlex64Cb, useFlex65Cb, useFlex66Cb, useFlex67Cb, useFlex68Cb, useFlex69Cb, useTextBox72Cb, useTextBox73Cb, useTextBox74Cb, useImage42Cb, useImage43Cb, useImage45Cb, useImage47Cb } from "../page-cbs/product designer";
import "../page-css/product designer.css";
import "../custom/product designer";

export default function ProductDesigner() {
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

  const Div12Props = useStore((state)=>state["product designer"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["product designer"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Flex62Props = useStore((state)=>state["product designer"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["product designer"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex63Props = useStore((state)=>state["product designer"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["product designer"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex64Props = useStore((state)=>state["product designer"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["product designer"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex65Props = useStore((state)=>state["product designer"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["product designer"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex66Props = useStore((state)=>state["product designer"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["product designer"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex67Props = useStore((state)=>state["product designer"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["product designer"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["product designer"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["product designer"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex69Props = useStore((state)=>state["product designer"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["product designer"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const TextBox72Props = useStore((state)=>state["product designer"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["product designer"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox73Props = useStore((state)=>state["product designer"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["product designer"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["product designer"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["product designer"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Image42Props = useStore((state)=>state["product designer"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["product designer"]["Image42"]);
const Image42Cb = useImage42Cb()
const Image43Props = useStore((state)=>state["product designer"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["product designer"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image45Props = useStore((state)=>state["product designer"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["product designer"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image47Props = useStore((state)=>state["product designer"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["product designer"]["Image47"]);
const Image47Cb = useImage47Cb()

  return (<>
  <Div4 className="p-product designer Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<Flex4 className="p-product designer Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox4 className="p-product designer TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<Flex4 className="p-product designer Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<TextBox4 className="p-product designer TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox4 className="p-product designer TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-product designer Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex4 className="p-product designer Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Image3 className="p-product designer Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
</Flex4>
<Flex4 className="p-product designer Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image3 className="p-product designer Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Flex4>
<Flex4 className="p-product designer Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex4 className="p-product designer Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Image3 className="p-product designer Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
</Flex4>
<Flex4 className="p-product designer Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Image3 className="p-product designer Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Flex4>
</Flex4>
</Flex4>
</Div4>
  </>);
}
