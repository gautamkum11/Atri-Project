import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div8 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex8 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox8 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image7 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useDiv31Cb, useFlex349Cb, useFlex350Cb, useFlex351Cb, useFlex353Cb, useFlex352Cb, useFlex354Cb, useFlex355Cb, useFlex356Cb, useTextBox329Cb, useTextBox298Cb, useTextBox299Cb, useTextBox300Cb, useTextBox301Cb, useImage149Cb, useTextBox303Cb, useTextBox304Cb, useTextBox315Cb, useTextBox316Cb, useTextBox323Cb, useTextBox324Cb, useTextBox325Cb, useTextBox326Cb, useTextBox327Cb, useTextBox328Cb } from "../page-cbs/last";
import "../page-css/last.css";
import "../custom/last";

export default function Last() {
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

  const Div31Props = useStore((state)=>state["last"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["last"]["Div31"]);
const Div31Cb = useDiv31Cb()
const Flex349Props = useStore((state)=>state["last"]["Flex349"]);
const Flex349IoProps = useIoStore((state)=>state["last"]["Flex349"]);
const Flex349Cb = useFlex349Cb()
const Flex350Props = useStore((state)=>state["last"]["Flex350"]);
const Flex350IoProps = useIoStore((state)=>state["last"]["Flex350"]);
const Flex350Cb = useFlex350Cb()
const Flex351Props = useStore((state)=>state["last"]["Flex351"]);
const Flex351IoProps = useIoStore((state)=>state["last"]["Flex351"]);
const Flex351Cb = useFlex351Cb()
const Flex353Props = useStore((state)=>state["last"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["last"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const Flex352Props = useStore((state)=>state["last"]["Flex352"]);
const Flex352IoProps = useIoStore((state)=>state["last"]["Flex352"]);
const Flex352Cb = useFlex352Cb()
const Flex354Props = useStore((state)=>state["last"]["Flex354"]);
const Flex354IoProps = useIoStore((state)=>state["last"]["Flex354"]);
const Flex354Cb = useFlex354Cb()
const Flex355Props = useStore((state)=>state["last"]["Flex355"]);
const Flex355IoProps = useIoStore((state)=>state["last"]["Flex355"]);
const Flex355Cb = useFlex355Cb()
const Flex356Props = useStore((state)=>state["last"]["Flex356"]);
const Flex356IoProps = useIoStore((state)=>state["last"]["Flex356"]);
const Flex356Cb = useFlex356Cb()
const TextBox329Props = useStore((state)=>state["last"]["TextBox329"]);
const TextBox329IoProps = useIoStore((state)=>state["last"]["TextBox329"]);
const TextBox329Cb = useTextBox329Cb()
const TextBox298Props = useStore((state)=>state["last"]["TextBox298"]);
const TextBox298IoProps = useIoStore((state)=>state["last"]["TextBox298"]);
const TextBox298Cb = useTextBox298Cb()
const TextBox299Props = useStore((state)=>state["last"]["TextBox299"]);
const TextBox299IoProps = useIoStore((state)=>state["last"]["TextBox299"]);
const TextBox299Cb = useTextBox299Cb()
const TextBox300Props = useStore((state)=>state["last"]["TextBox300"]);
const TextBox300IoProps = useIoStore((state)=>state["last"]["TextBox300"]);
const TextBox300Cb = useTextBox300Cb()
const TextBox301Props = useStore((state)=>state["last"]["TextBox301"]);
const TextBox301IoProps = useIoStore((state)=>state["last"]["TextBox301"]);
const TextBox301Cb = useTextBox301Cb()
const Image149Props = useStore((state)=>state["last"]["Image149"]);
const Image149IoProps = useIoStore((state)=>state["last"]["Image149"]);
const Image149Cb = useImage149Cb()
const TextBox303Props = useStore((state)=>state["last"]["TextBox303"]);
const TextBox303IoProps = useIoStore((state)=>state["last"]["TextBox303"]);
const TextBox303Cb = useTextBox303Cb()
const TextBox304Props = useStore((state)=>state["last"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["last"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const TextBox315Props = useStore((state)=>state["last"]["TextBox315"]);
const TextBox315IoProps = useIoStore((state)=>state["last"]["TextBox315"]);
const TextBox315Cb = useTextBox315Cb()
const TextBox316Props = useStore((state)=>state["last"]["TextBox316"]);
const TextBox316IoProps = useIoStore((state)=>state["last"]["TextBox316"]);
const TextBox316Cb = useTextBox316Cb()
const TextBox323Props = useStore((state)=>state["last"]["TextBox323"]);
const TextBox323IoProps = useIoStore((state)=>state["last"]["TextBox323"]);
const TextBox323Cb = useTextBox323Cb()
const TextBox324Props = useStore((state)=>state["last"]["TextBox324"]);
const TextBox324IoProps = useIoStore((state)=>state["last"]["TextBox324"]);
const TextBox324Cb = useTextBox324Cb()
const TextBox325Props = useStore((state)=>state["last"]["TextBox325"]);
const TextBox325IoProps = useIoStore((state)=>state["last"]["TextBox325"]);
const TextBox325Cb = useTextBox325Cb()
const TextBox326Props = useStore((state)=>state["last"]["TextBox326"]);
const TextBox326IoProps = useIoStore((state)=>state["last"]["TextBox326"]);
const TextBox326Cb = useTextBox326Cb()
const TextBox327Props = useStore((state)=>state["last"]["TextBox327"]);
const TextBox327IoProps = useIoStore((state)=>state["last"]["TextBox327"]);
const TextBox327Cb = useTextBox327Cb()
const TextBox328Props = useStore((state)=>state["last"]["TextBox328"]);
const TextBox328IoProps = useIoStore((state)=>state["last"]["TextBox328"]);
const TextBox328Cb = useTextBox328Cb()

  return (<>
  <Div8 className="p-last Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}>
<Flex8 className="p-last Flex349 bpt" {...Flex349Props} {...Flex349Cb} {...Flex349IoProps}>
<TextBox8 className="p-last TextBox298 bpt" {...TextBox298Props} {...TextBox298Cb} {...TextBox298IoProps}/>
<TextBox8 className="p-last TextBox299 bpt" {...TextBox299Props} {...TextBox299Cb} {...TextBox299IoProps}/>
</Flex8>
<Flex8 className="p-last Flex350 bpt" {...Flex350Props} {...Flex350Cb} {...Flex350IoProps}>
<Flex8 className="p-last Flex351 bpt" {...Flex351Props} {...Flex351Cb} {...Flex351IoProps}>
<TextBox8 className="p-last TextBox300 bpt" {...TextBox300Props} {...TextBox300Cb} {...TextBox300IoProps}/>
<TextBox8 className="p-last TextBox301 bpt" {...TextBox301Props} {...TextBox301Cb} {...TextBox301IoProps}/>
<Flex8 className="p-last Flex353 bpt" {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<Image7 className="p-last Image149 bpt" {...Image149Props} {...Image149Cb} {...Image149IoProps}/>
<TextBox8 className="p-last TextBox303 bpt" {...TextBox303Props} {...TextBox303Cb} {...TextBox303IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-last Flex352 bpt" {...Flex352Props} {...Flex352Cb} {...Flex352IoProps}>
<Flex8 className="p-last Flex354 bpt" {...Flex354Props} {...Flex354Cb} {...Flex354IoProps}>
<TextBox8 className="p-last TextBox304 bpt" {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
<TextBox8 className="p-last TextBox315 bpt" {...TextBox315Props} {...TextBox315Cb} {...TextBox315IoProps}/>
<TextBox8 className="p-last TextBox316 bpt" {...TextBox316Props} {...TextBox316Cb} {...TextBox316IoProps}/>
</Flex8>
<Flex8 className="p-last Flex355 bpt" {...Flex355Props} {...Flex355Cb} {...Flex355IoProps}>
<TextBox8 className="p-last TextBox323 bpt" {...TextBox323Props} {...TextBox323Cb} {...TextBox323IoProps}/>
<TextBox8 className="p-last TextBox324 bpt" {...TextBox324Props} {...TextBox324Cb} {...TextBox324IoProps}/>
<TextBox8 className="p-last TextBox325 bpt" {...TextBox325Props} {...TextBox325Cb} {...TextBox325IoProps}/>
</Flex8>
<Flex8 className="p-last Flex356 bpt" {...Flex356Props} {...Flex356Cb} {...Flex356IoProps}>
<TextBox8 className="p-last TextBox326 bpt" {...TextBox326Props} {...TextBox326Cb} {...TextBox326IoProps}/>
<TextBox8 className="p-last TextBox327 bpt" {...TextBox327Props} {...TextBox327Cb} {...TextBox327IoProps}/>
<TextBox8 className="p-last TextBox328 bpt" {...TextBox328Props} {...TextBox328Cb} {...TextBox328IoProps}/>
</Flex8>
</Flex8>
</Flex8>
<TextBox8 className="p-last TextBox329 bpt" {...TextBox329Props} {...TextBox329Cb} {...TextBox329IoProps}/>
</Div8>
  </>);
}
