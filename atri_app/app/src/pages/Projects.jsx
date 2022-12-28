import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv9Cb, useFlex41Cb, useFlex42Cb, useButton3Cb, useTextBox49Cb, useTextBox50Cb, useTextBox51Cb } from "../page-cbs/projects";
import "../page-css/projects.css";
import "../custom/projects";

export default function Projects() {
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

  const Div9Props = useStore((state)=>state["projects"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["projects"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Flex41Props = useStore((state)=>state["projects"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["projects"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["projects"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["projects"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Button3Props = useStore((state)=>state["projects"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["projects"]["Button3"]);
const Button3Cb = useButton3Cb()
const TextBox49Props = useStore((state)=>state["projects"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["projects"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["projects"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["projects"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["projects"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["projects"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()

  return (<>
  <Div2 className="p-projects Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<Flex2 className="p-projects Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Button1 className="p-projects Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Flex2 className="p-projects Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox2 className="p-projects TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox2 className="p-projects TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox2 className="p-projects TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex2>
</Flex2>
</Div2>
  </>);
}
