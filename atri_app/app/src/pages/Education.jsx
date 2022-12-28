import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div5 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex5 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox5 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useDiv13Cb, useFlex70Cb, useFlex71Cb, useFlex72Cb, useFlex118Cb, useFlex119Cb, useFlex130Cb, useFlex124Cb, useFlex123Cb, useFlex121Cb, useFlex122Cb, useFlex134Cb, useFlex133Cb, useFlex131Cb, useFlex132Cb, useFlex138Cb, useFlex137Cb, useFlex135Cb, useFlex136Cb, useFlex120Cb, useFlex143Cb, useFlex145Cb, useFlex146Cb, useFlex149Cb, useFlex147Cb, useFlex148Cb, useFlex155Cb, useFlex153Cb, useFlex152Cb, useFlex150Cb, useFlex151Cb, useFlex154Cb, useFlex161Cb, useFlex159Cb, useFlex158Cb, useFlex156Cb, useFlex157Cb, useFlex160Cb, useTextBox75Cb, useTextBox76Cb, useTextBox111Cb, useTextBox112Cb, useImage59Cb, useTextBox113Cb, useTextBox120Cb, useImage62Cb, useTextBox121Cb, useTextBox122Cb, useTextBox123Cb, useImage63Cb, useTextBox124Cb, useTextBox125Cb, useImage68Cb, useTextBox128Cb, useImage69Cb, useTextBox129Cb, useTextBox130Cb, useTextBox131Cb, useTextBox132Cb, useImage70Cb, useTextBox133Cb, useImage71Cb, useTextBox134Cb, useTextBox135Cb, useImage72Cb, useTextBox136Cb, useImage73Cb } from "../page-cbs/education";
import "../page-css/education.css";
import "../custom/education";

export default function Education() {
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

  const Div13Props = useStore((state)=>state["education"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["education"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Flex70Props = useStore((state)=>state["education"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["education"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex71Props = useStore((state)=>state["education"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["education"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex72Props = useStore((state)=>state["education"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["education"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex118Props = useStore((state)=>state["education"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["education"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex119Props = useStore((state)=>state["education"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["education"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex130Props = useStore((state)=>state["education"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["education"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex124Props = useStore((state)=>state["education"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["education"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex123Props = useStore((state)=>state["education"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["education"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex121Props = useStore((state)=>state["education"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["education"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex122Props = useStore((state)=>state["education"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["education"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex134Props = useStore((state)=>state["education"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["education"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex133Props = useStore((state)=>state["education"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["education"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex131Props = useStore((state)=>state["education"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["education"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex132Props = useStore((state)=>state["education"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["education"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex138Props = useStore((state)=>state["education"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["education"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex137Props = useStore((state)=>state["education"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["education"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex135Props = useStore((state)=>state["education"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["education"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex136Props = useStore((state)=>state["education"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["education"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex120Props = useStore((state)=>state["education"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["education"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex143Props = useStore((state)=>state["education"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["education"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex145Props = useStore((state)=>state["education"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["education"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex146Props = useStore((state)=>state["education"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["education"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex149Props = useStore((state)=>state["education"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["education"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex147Props = useStore((state)=>state["education"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["education"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex148Props = useStore((state)=>state["education"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["education"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex155Props = useStore((state)=>state["education"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["education"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex153Props = useStore((state)=>state["education"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["education"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Flex152Props = useStore((state)=>state["education"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["education"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Flex150Props = useStore((state)=>state["education"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["education"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex151Props = useStore((state)=>state["education"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["education"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Flex154Props = useStore((state)=>state["education"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["education"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Flex161Props = useStore((state)=>state["education"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["education"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex159Props = useStore((state)=>state["education"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["education"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const Flex158Props = useStore((state)=>state["education"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["education"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex156Props = useStore((state)=>state["education"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["education"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Flex157Props = useStore((state)=>state["education"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["education"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex160Props = useStore((state)=>state["education"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["education"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const TextBox75Props = useStore((state)=>state["education"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["education"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["education"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["education"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox111Props = useStore((state)=>state["education"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["education"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["education"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["education"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image59Props = useStore((state)=>state["education"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["education"]["Image59"]);
const Image59Cb = useImage59Cb()
const TextBox113Props = useStore((state)=>state["education"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["education"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox120Props = useStore((state)=>state["education"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["education"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const Image62Props = useStore((state)=>state["education"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["education"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox121Props = useStore((state)=>state["education"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["education"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["education"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["education"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["education"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["education"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const Image63Props = useStore((state)=>state["education"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["education"]["Image63"]);
const Image63Cb = useImage63Cb()
const TextBox124Props = useStore((state)=>state["education"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["education"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["education"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["education"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Image68Props = useStore((state)=>state["education"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["education"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox128Props = useStore((state)=>state["education"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["education"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const Image69Props = useStore((state)=>state["education"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["education"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox129Props = useStore((state)=>state["education"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["education"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["education"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["education"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["education"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["education"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["education"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["education"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const Image70Props = useStore((state)=>state["education"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["education"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox133Props = useStore((state)=>state["education"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["education"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const Image71Props = useStore((state)=>state["education"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["education"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox134Props = useStore((state)=>state["education"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["education"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["education"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["education"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Image72Props = useStore((state)=>state["education"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["education"]["Image72"]);
const Image72Cb = useImage72Cb()
const TextBox136Props = useStore((state)=>state["education"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["education"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const Image73Props = useStore((state)=>state["education"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["education"]["Image73"]);
const Image73Cb = useImage73Cb()

  return (<>
  <Div5 className="p-education Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<Flex5 className="p-education Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Flex5 className="p-education Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox5 className="p-education TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Flex5>
<Flex5 className="p-education Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<TextBox5 className="p-education TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Flex5>
</Flex5>
<Flex5 className="p-education Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Flex5 className="p-education Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Flex5 className="p-education Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Flex5 className="p-education Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Flex5 className="p-education Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Flex5 className="p-education Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<TextBox5 className="p-education TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<Image4 className="p-education Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex5>
<Flex5 className="p-education Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<TextBox5 className="p-education TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox5 className="p-education TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-education Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Flex5 className="p-education Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<Flex5 className="p-education Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox5 className="p-education TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<Image4 className="p-education Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex5>
<Flex5 className="p-education Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<TextBox5 className="p-education TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<TextBox5 className="p-education TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-education Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Flex5 className="p-education Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Flex5 className="p-education Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<TextBox5 className="p-education TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<Image4 className="p-education Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex5>
<Flex5 className="p-education Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<TextBox5 className="p-education TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<TextBox5 className="p-education TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
</Flex5>
</Flex5>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-education Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Flex5 className="p-education Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<Flex5 className="p-education Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Image4 className="p-education Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Flex5>
<Flex5 className="p-education Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Flex5 className="p-education Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Flex5 className="p-education Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<TextBox5 className="p-education TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<Image4 className="p-education Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Flex5>
<Flex5 className="p-education Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<TextBox5 className="p-education TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<TextBox5 className="p-education TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
</Flex5>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-education Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Flex5 className="p-education Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Image4 className="p-education Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Flex5>
<Flex5 className="p-education Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Flex5 className="p-education Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<Flex5 className="p-education Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<TextBox5 className="p-education TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<Image4 className="p-education Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
</Flex5>
<Flex5 className="p-education Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<TextBox5 className="p-education TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox5 className="p-education TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
</Flex5>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-education Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<Flex5 className="p-education Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<Image4 className="p-education Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
</Flex5>
<Flex5 className="p-education Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<Flex5 className="p-education Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<Flex5 className="p-education Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<TextBox5 className="p-education TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<Image4 className="p-education Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
</Flex5>
<Flex5 className="p-education Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<TextBox5 className="p-education TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox5 className="p-education TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
</Flex5>
</Flex5>
</Flex5>
</Flex5>
</Flex5>
</Flex5>
</Div5>
  </>);
}
