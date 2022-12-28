import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useDiv8Cb, useFlex23Cb, useFlex28Cb, useFlex25Cb, useFlex37Cb, useFlex38Cb, useFlex39Cb, useFlex40Cb, useFlex26Cb, useFlex34Cb, useFlex35Cb, useFlex36Cb, useFlex27Cb, useFlex31Cb, useFlex30Cb, useFlex32Cb, useFlex33Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useImage27Cb, useTextBox45Cb, useTextBox44Cb, useTextBox46Cb, useImage31Cb, useTextBox47Cb, useImage32Cb, useTextBox48Cb, useImage33Cb, useImage26Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useTextBox41Cb, useImage28Cb, useTextBox42Cb, useImage29Cb, useTextBox43Cb, useImage30Cb, useImage22Cb, useTextBox32Cb, useTextBox33Cb, useTextBox34Cb, useImage23Cb, useTextBox35Cb, useImage24Cb, useImage25Cb, useTextBox36Cb } from "../page-cbs/service";
import "../page-css/service.css";
import "../custom/service";

export default function Service() {
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

  const Div8Props = useStore((state)=>state["service"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["service"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Flex23Props = useStore((state)=>state["service"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["service"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Flex28Props = useStore((state)=>state["service"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["service"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex25Props = useStore((state)=>state["service"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["service"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex37Props = useStore((state)=>state["service"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["service"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex38Props = useStore((state)=>state["service"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["service"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["service"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["service"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["service"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["service"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex26Props = useStore((state)=>state["service"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["service"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex34Props = useStore((state)=>state["service"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["service"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["service"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["service"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["service"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["service"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex27Props = useStore((state)=>state["service"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["service"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex31Props = useStore((state)=>state["service"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["service"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex30Props = useStore((state)=>state["service"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["service"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex32Props = useStore((state)=>state["service"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["service"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex33Props = useStore((state)=>state["service"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["service"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const TextBox25Props = useStore((state)=>state["service"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["service"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["service"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["service"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["service"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["service"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Image27Props = useStore((state)=>state["service"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["service"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox45Props = useStore((state)=>state["service"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["service"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox44Props = useStore((state)=>state["service"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["service"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox46Props = useStore((state)=>state["service"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["service"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Image31Props = useStore((state)=>state["service"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["service"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox47Props = useStore((state)=>state["service"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["service"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Image32Props = useStore((state)=>state["service"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["service"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox48Props = useStore((state)=>state["service"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["service"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Image33Props = useStore((state)=>state["service"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["service"]["Image33"]);
const Image33Cb = useImage33Cb()
const Image26Props = useStore((state)=>state["service"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["service"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox37Props = useStore((state)=>state["service"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["service"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["service"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["service"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["service"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["service"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox41Props = useStore((state)=>state["service"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["service"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image28Props = useStore((state)=>state["service"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["service"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox42Props = useStore((state)=>state["service"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["service"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image29Props = useStore((state)=>state["service"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["service"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox43Props = useStore((state)=>state["service"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["service"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Image30Props = useStore((state)=>state["service"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["service"]["Image30"]);
const Image30Cb = useImage30Cb()
const Image22Props = useStore((state)=>state["service"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["service"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox32Props = useStore((state)=>state["service"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["service"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["service"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["service"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["service"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["service"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image23Props = useStore((state)=>state["service"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["service"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox35Props = useStore((state)=>state["service"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["service"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image24Props = useStore((state)=>state["service"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["service"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image25Props = useStore((state)=>state["service"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["service"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox36Props = useStore((state)=>state["service"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["service"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()

  return (<>
  <Div1 className="p-service Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<Flex1 className="p-service Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<TextBox1 className="p-service TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox1 className="p-service TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox1 className="p-service TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Flex1 className="p-service Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Flex1 className="p-service Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Image1 className="p-service Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox1 className="p-service TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox1 className="p-service TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<Flex1 className="p-service Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Flex1 className="p-service Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Image1 className="p-service Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox1 className="p-service TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-service Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<TextBox1 className="p-service TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<Image1 className="p-service Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex1>
<Flex1 className="p-service Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image1 className="p-service Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox1 className="p-service TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-service Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox1 className="p-service TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<Image1 className="p-service Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox1 className="p-service TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox1 className="p-service TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<Flex1 className="p-service Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox1 className="p-service TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<Image1 className="p-service Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex1>
<Flex1 className="p-service Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox1 className="p-service TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<Image1 className="p-service Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex1>
<Flex1 className="p-service Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox1 className="p-service TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<Image1 className="p-service Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-service Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Image1 className="p-service Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Flex1 className="p-service Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<TextBox1 className="p-service TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex1>
<TextBox1 className="p-service TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<Flex1 className="p-service Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<TextBox1 className="p-service TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<Image1 className="p-service Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Flex1>
<Flex1 className="p-service Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox1 className="p-service TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<Image1 className="p-service Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Flex1>
<Flex1 className="p-service Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox1 className="p-service TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<Image1 className="p-service Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Div1>
  </>);
}
