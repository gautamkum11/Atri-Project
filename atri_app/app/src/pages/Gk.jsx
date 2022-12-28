import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div6 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex6 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox6 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image5 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useDiv26Cb, useFlex293Cb, useFlex301Cb, useFlex299Cb, useFlex296Cb, useFlex294Cb, useFlex295Cb, useFlex297Cb, useFlex298Cb, useFlex300Cb, useTextBox262Cb, useTextBox263Cb, useImage124Cb, useTextBox264Cb, useTextBox265Cb, useTextBox266Cb, useImage125Cb, useImage126Cb } from "../page-cbs/gk";
import "../page-css/gk.css";
import "../custom/gk";

export default function Gk() {
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

  const Div26Props = useStore((state)=>state["gk"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["gk"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Flex293Props = useStore((state)=>state["gk"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["gk"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Flex301Props = useStore((state)=>state["gk"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["gk"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Flex299Props = useStore((state)=>state["gk"]["Flex299"]);
const Flex299IoProps = useIoStore((state)=>state["gk"]["Flex299"]);
const Flex299Cb = useFlex299Cb()
const Flex296Props = useStore((state)=>state["gk"]["Flex296"]);
const Flex296IoProps = useIoStore((state)=>state["gk"]["Flex296"]);
const Flex296Cb = useFlex296Cb()
const Flex294Props = useStore((state)=>state["gk"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["gk"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Flex295Props = useStore((state)=>state["gk"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["gk"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Flex297Props = useStore((state)=>state["gk"]["Flex297"]);
const Flex297IoProps = useIoStore((state)=>state["gk"]["Flex297"]);
const Flex297Cb = useFlex297Cb()
const Flex298Props = useStore((state)=>state["gk"]["Flex298"]);
const Flex298IoProps = useIoStore((state)=>state["gk"]["Flex298"]);
const Flex298Cb = useFlex298Cb()
const Flex300Props = useStore((state)=>state["gk"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["gk"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const TextBox262Props = useStore((state)=>state["gk"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["gk"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const TextBox263Props = useStore((state)=>state["gk"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["gk"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const Image124Props = useStore((state)=>state["gk"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["gk"]["Image124"]);
const Image124Cb = useImage124Cb()
const TextBox264Props = useStore((state)=>state["gk"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["gk"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()
const TextBox265Props = useStore((state)=>state["gk"]["TextBox265"]);
const TextBox265IoProps = useIoStore((state)=>state["gk"]["TextBox265"]);
const TextBox265Cb = useTextBox265Cb()
const TextBox266Props = useStore((state)=>state["gk"]["TextBox266"]);
const TextBox266IoProps = useIoStore((state)=>state["gk"]["TextBox266"]);
const TextBox266Cb = useTextBox266Cb()
const Image125Props = useStore((state)=>state["gk"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["gk"]["Image125"]);
const Image125Cb = useImage125Cb()
const Image126Props = useStore((state)=>state["gk"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["gk"]["Image126"]);
const Image126Cb = useImage126Cb()

  return (<>
  <Div6 className="p-gk Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<Flex6 className="p-gk Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<TextBox6 className="p-gk TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
<TextBox6 className="p-gk TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
</Flex6>
<Flex6 className="p-gk Flex301 bpt" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<Flex6 className="p-gk Flex300 bpt" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}>
<Image5 className="p-gk Image126 bpt" {...Image126Props} {...Image126Cb} {...Image126IoProps}/>
</Flex6>
<Flex6 className="p-gk Flex299 bpt" {...Flex299Props} {...Flex299Cb} {...Flex299IoProps}>
<Flex6 className="p-gk Flex298 bpt" {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<Image5 className="p-gk Image125 bpt" {...Image125Props} {...Image125Cb} {...Image125IoProps}/>
</Flex6>
<Flex6 className="p-gk Flex297 bpt" {...Flex297Props} {...Flex297Cb} {...Flex297IoProps}>
<TextBox6 className="p-gk TextBox266 bpt" {...TextBox266Props} {...TextBox266Cb} {...TextBox266IoProps}/>
</Flex6>
<Flex6 className="p-gk Flex296 bpt" {...Flex296Props} {...Flex296Cb} {...Flex296IoProps}>
<Flex6 className="p-gk Flex295 bpt" {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<TextBox6 className="p-gk TextBox265 bpt" {...TextBox265Props} {...TextBox265Cb} {...TextBox265IoProps}/>
<TextBox6 className="p-gk TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
</Flex6>
<Flex6 className="p-gk Flex294 bpt" {...Flex294Props} {...Flex294Cb} {...Flex294IoProps}>
<Image5 className="p-gk Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
</Flex6>
</Flex6>
</Flex6>
</Flex6>
</Div6>
  </>);
}
