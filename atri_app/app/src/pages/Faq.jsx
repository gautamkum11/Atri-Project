import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div7 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex7 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox7 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image6 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useDiv29Cb, useFlex320Cb, useFlex322Cb, useFlex323Cb, useFlex325Cb, useFlex330Cb, useFlex331Cb, useFlex332Cb, useFlex324Cb, useFlex333Cb, useFlex334Cb, useFlex335Cb, useFlex336Cb, useTextBox277Cb, useTextBox279Cb, useTextBox280Cb, useImage133Cb, useImage134Cb, useTextBox281Cb, useImage135Cb, useTextBox282Cb, useImage136Cb, useTextBox283Cb, useImage137Cb, useTextBox284Cb, useImage138Cb, useTextBox285Cb, useImage139Cb, useTextBox286Cb, useImage140Cb, useTextBox287Cb } from "../page-cbs/faq";
import "../page-css/faq.css";
import "../custom/faq";

export default function Faq() {
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

  const Div29Props = useStore((state)=>state["faq"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["faq"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Flex320Props = useStore((state)=>state["faq"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["faq"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Flex322Props = useStore((state)=>state["faq"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["faq"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex323Props = useStore((state)=>state["faq"]["Flex323"]);
const Flex323IoProps = useIoStore((state)=>state["faq"]["Flex323"]);
const Flex323Cb = useFlex323Cb()
const Flex325Props = useStore((state)=>state["faq"]["Flex325"]);
const Flex325IoProps = useIoStore((state)=>state["faq"]["Flex325"]);
const Flex325Cb = useFlex325Cb()
const Flex330Props = useStore((state)=>state["faq"]["Flex330"]);
const Flex330IoProps = useIoStore((state)=>state["faq"]["Flex330"]);
const Flex330Cb = useFlex330Cb()
const Flex331Props = useStore((state)=>state["faq"]["Flex331"]);
const Flex331IoProps = useIoStore((state)=>state["faq"]["Flex331"]);
const Flex331Cb = useFlex331Cb()
const Flex332Props = useStore((state)=>state["faq"]["Flex332"]);
const Flex332IoProps = useIoStore((state)=>state["faq"]["Flex332"]);
const Flex332Cb = useFlex332Cb()
const Flex324Props = useStore((state)=>state["faq"]["Flex324"]);
const Flex324IoProps = useIoStore((state)=>state["faq"]["Flex324"]);
const Flex324Cb = useFlex324Cb()
const Flex333Props = useStore((state)=>state["faq"]["Flex333"]);
const Flex333IoProps = useIoStore((state)=>state["faq"]["Flex333"]);
const Flex333Cb = useFlex333Cb()
const Flex334Props = useStore((state)=>state["faq"]["Flex334"]);
const Flex334IoProps = useIoStore((state)=>state["faq"]["Flex334"]);
const Flex334Cb = useFlex334Cb()
const Flex335Props = useStore((state)=>state["faq"]["Flex335"]);
const Flex335IoProps = useIoStore((state)=>state["faq"]["Flex335"]);
const Flex335Cb = useFlex335Cb()
const Flex336Props = useStore((state)=>state["faq"]["Flex336"]);
const Flex336IoProps = useIoStore((state)=>state["faq"]["Flex336"]);
const Flex336Cb = useFlex336Cb()
const TextBox277Props = useStore((state)=>state["faq"]["TextBox277"]);
const TextBox277IoProps = useIoStore((state)=>state["faq"]["TextBox277"]);
const TextBox277Cb = useTextBox277Cb()
const TextBox279Props = useStore((state)=>state["faq"]["TextBox279"]);
const TextBox279IoProps = useIoStore((state)=>state["faq"]["TextBox279"]);
const TextBox279Cb = useTextBox279Cb()
const TextBox280Props = useStore((state)=>state["faq"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["faq"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const Image133Props = useStore((state)=>state["faq"]["Image133"]);
const Image133IoProps = useIoStore((state)=>state["faq"]["Image133"]);
const Image133Cb = useImage133Cb()
const Image134Props = useStore((state)=>state["faq"]["Image134"]);
const Image134IoProps = useIoStore((state)=>state["faq"]["Image134"]);
const Image134Cb = useImage134Cb()
const TextBox281Props = useStore((state)=>state["faq"]["TextBox281"]);
const TextBox281IoProps = useIoStore((state)=>state["faq"]["TextBox281"]);
const TextBox281Cb = useTextBox281Cb()
const Image135Props = useStore((state)=>state["faq"]["Image135"]);
const Image135IoProps = useIoStore((state)=>state["faq"]["Image135"]);
const Image135Cb = useImage135Cb()
const TextBox282Props = useStore((state)=>state["faq"]["TextBox282"]);
const TextBox282IoProps = useIoStore((state)=>state["faq"]["TextBox282"]);
const TextBox282Cb = useTextBox282Cb()
const Image136Props = useStore((state)=>state["faq"]["Image136"]);
const Image136IoProps = useIoStore((state)=>state["faq"]["Image136"]);
const Image136Cb = useImage136Cb()
const TextBox283Props = useStore((state)=>state["faq"]["TextBox283"]);
const TextBox283IoProps = useIoStore((state)=>state["faq"]["TextBox283"]);
const TextBox283Cb = useTextBox283Cb()
const Image137Props = useStore((state)=>state["faq"]["Image137"]);
const Image137IoProps = useIoStore((state)=>state["faq"]["Image137"]);
const Image137Cb = useImage137Cb()
const TextBox284Props = useStore((state)=>state["faq"]["TextBox284"]);
const TextBox284IoProps = useIoStore((state)=>state["faq"]["TextBox284"]);
const TextBox284Cb = useTextBox284Cb()
const Image138Props = useStore((state)=>state["faq"]["Image138"]);
const Image138IoProps = useIoStore((state)=>state["faq"]["Image138"]);
const Image138Cb = useImage138Cb()
const TextBox285Props = useStore((state)=>state["faq"]["TextBox285"]);
const TextBox285IoProps = useIoStore((state)=>state["faq"]["TextBox285"]);
const TextBox285Cb = useTextBox285Cb()
const Image139Props = useStore((state)=>state["faq"]["Image139"]);
const Image139IoProps = useIoStore((state)=>state["faq"]["Image139"]);
const Image139Cb = useImage139Cb()
const TextBox286Props = useStore((state)=>state["faq"]["TextBox286"]);
const TextBox286IoProps = useIoStore((state)=>state["faq"]["TextBox286"]);
const TextBox286Cb = useTextBox286Cb()
const Image140Props = useStore((state)=>state["faq"]["Image140"]);
const Image140IoProps = useIoStore((state)=>state["faq"]["Image140"]);
const Image140Cb = useImage140Cb()
const TextBox287Props = useStore((state)=>state["faq"]["TextBox287"]);
const TextBox287IoProps = useIoStore((state)=>state["faq"]["TextBox287"]);
const TextBox287Cb = useTextBox287Cb()

  return (<>
  <Div7 className="p-faq Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<Flex7 className="p-faq Flex320 bpt" {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<TextBox7 className="p-faq TextBox277 bpt" {...TextBox277Props} {...TextBox277Cb} {...TextBox277IoProps}/>
<TextBox7 className="p-faq TextBox279 bpt" {...TextBox279Props} {...TextBox279Cb} {...TextBox279IoProps}/>
</Flex7>
<Flex7 className="p-faq Flex322 bpt" {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<Flex7 className="p-faq Flex323 bpt" {...Flex323Props} {...Flex323Cb} {...Flex323IoProps}>
<Flex7 className="p-faq Flex325 bpt" {...Flex325Props} {...Flex325Cb} {...Flex325IoProps}>
<TextBox7 className="p-faq TextBox280 bpt" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
<Image6 className="p-faq Image133 bpt" {...Image133Props} {...Image133Cb} {...Image133IoProps}/>
</Flex7>
<Flex7 className="p-faq Flex330 bpt" {...Flex330Props} {...Flex330Cb} {...Flex330IoProps}>
<TextBox7 className="p-faq TextBox281 bpt" {...TextBox281Props} {...TextBox281Cb} {...TextBox281IoProps}/>
<Image6 className="p-faq Image134 bpt" {...Image134Props} {...Image134Cb} {...Image134IoProps}/>
</Flex7>
<Flex7 className="p-faq Flex331 bpt" {...Flex331Props} {...Flex331Cb} {...Flex331IoProps}>
<TextBox7 className="p-faq TextBox282 bpt" {...TextBox282Props} {...TextBox282Cb} {...TextBox282IoProps}/>
<Image6 className="p-faq Image135 bpt" {...Image135Props} {...Image135Cb} {...Image135IoProps}/>
</Flex7>
<Flex7 className="p-faq Flex332 bpt" {...Flex332Props} {...Flex332Cb} {...Flex332IoProps}>
<TextBox7 className="p-faq TextBox283 bpt" {...TextBox283Props} {...TextBox283Cb} {...TextBox283IoProps}/>
<Image6 className="p-faq Image136 bpt" {...Image136Props} {...Image136Cb} {...Image136IoProps}/>
</Flex7>
</Flex7>
<Flex7 className="p-faq Flex324 bpt" {...Flex324Props} {...Flex324Cb} {...Flex324IoProps}>
<Flex7 className="p-faq Flex333 bpt" {...Flex333Props} {...Flex333Cb} {...Flex333IoProps}>
<TextBox7 className="p-faq TextBox284 bpt" {...TextBox284Props} {...TextBox284Cb} {...TextBox284IoProps}/>
<Image6 className="p-faq Image137 bpt" {...Image137Props} {...Image137Cb} {...Image137IoProps}/>
</Flex7>
<Flex7 className="p-faq Flex334 bpt" {...Flex334Props} {...Flex334Cb} {...Flex334IoProps}>
<TextBox7 className="p-faq TextBox285 bpt" {...TextBox285Props} {...TextBox285Cb} {...TextBox285IoProps}/>
<Image6 className="p-faq Image138 bpt" {...Image138Props} {...Image138Cb} {...Image138IoProps}/>
</Flex7>
<Flex7 className="p-faq Flex335 bpt" {...Flex335Props} {...Flex335Cb} {...Flex335IoProps}>
<TextBox7 className="p-faq TextBox286 bpt" {...TextBox286Props} {...TextBox286Cb} {...TextBox286IoProps}/>
<Image6 className="p-faq Image139 bpt" {...Image139Props} {...Image139Cb} {...Image139IoProps}/>
</Flex7>
<Flex7 className="p-faq Flex336 bpt" {...Flex336Props} {...Flex336Cb} {...Flex336IoProps}>
<TextBox7 className="p-faq TextBox287 bpt" {...TextBox287Props} {...TextBox287Cb} {...TextBox287IoProps}/>
<Image6 className="p-faq Image140 bpt" {...Image140Props} {...Image140Cb} {...Image140IoProps}/>
</Flex7>
</Flex7>
</Flex7>
</Div7>
  </>);
}
