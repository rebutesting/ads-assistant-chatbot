import svgPaths from "./svg-lmgmq5rpht";

function Filled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_72492)" id="filled">
          <g id="vector">
            <path d={svgPaths.p22e6c000} fill="var(--fill-0, #932FFB)" />
            <path d={svgPaths.p25037800} fill="var(--fill-0, #932FFB)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_72492">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AiAssistant() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-[52px]" data-name="ai_assistant">
      <Filled />
    </div>
  );
}

function ArtworkFrame() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[64px] min-w-[48px] relative shrink-0" data-name="Artwork frame">
      <AiAssistant />
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content frame">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[20px]">Merchant Assistant</p>
      </div>
    </div>
  );
}

function RichTextBeta() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Rich text_Beta">
      <ContentFrame />
    </div>
  );
}

function TextFrame() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-[64px] min-w-px overflow-clip px-0 py-[12px] relative shrink-0" data-name="Text frame">
      <RichTextBeta />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap">
        <p className="leading-[16px]">End chat</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[28px] shrink-0" data-name="Button">
      <Content />
      <div className="h-0 relative shrink-0 w-[52px]" data-name="Minimum width XSmall">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width XSmall"></g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.pe94d800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13ba8f00} fill="var(--fill-0, black)" />
            <path d={svgPaths.pc942880} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ThreeDots() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[12px]" data-name="three_dots">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-center justify-center p-[6px] relative rounded-[36px] shrink-0 size-[28px]" data-name="Icon">
      <ThreeDots />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p184d7400} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[12px]" data-name="x">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0 size-[28px]" data-name="Icon">
      <X />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Icon3 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Button group">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function ControlFrame() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center px-[16px] py-[10px] relative shrink-0" data-name="Control frame">
      <ButtonGroup />
    </div>
  );
}

function ContentFrame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content frame">
      <TextFrame />
      <div className="flex flex-row items-center self-stretch">
        <ControlFrame />
      </div>
    </div>
  );
}

function ContentCellDivider() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content + cell divider">
      <ContentFrame1 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip pb-0 pl-[8px] pr-0 pt-[8px] relative shrink-0 w-[440px]" data-name="List item">
      <ArtworkFrame />
      <ContentCellDivider />
    </div>
  );
}

function WebHeader() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Web header">
      <ListItem />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="bg-[#f3edfe] content-stretch flex flex-col gap-[2px] items-start justify-end px-[12px] py-[10px] relative rounded-[16px] shrink-0" data-name="Text container">
      <div aria-hidden="true" className="absolute border border-[#cdbaff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Uber_Move_Text:regular',sans-serif] justify-center leading-[0] max-w-[256px] not-italic relative shrink-0 text-[#7a15cf] text-[14px] text-nowrap">
        <p className="leading-[20px]">{`Close my store for 99 tomorrow `}</p>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content container">
      <TextContainer />
    </div>
  );
}

function TailClip() {
  return (
    <div className="h-[10px] relative w-[18px]" data-name="Tail clip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
        <g clipPath="url(#clip0_3_72414)" id="Tail clip">
          <path d={svgPaths.p25cc8f00} fill="var(--fill-0, #F3EDFE)" id="Vector" stroke="var(--stroke-0, #CDBAFF)" />
        </g>
        <defs>
          <clipPath id="clip0_3_72414">
            <rect fill="white" height="10" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tail() {
  return (
    <div className="h-[7.84px] relative w-[18px]" data-name="Tail">
      <div className="absolute flex h-[17.842px] items-center justify-center left-[-2.55px] top-[-0.25px] w-[20.579px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[31deg]">
          <TailClip />
        </div>
      </div>
    </div>
  );
}

function VisionElementsBubbleTailVision() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-end justify-end right-[0.01px]" data-name="Vision / Elements / Bubble tail (vision)">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Tail />
        </div>
      </div>
    </div>
  );
}

function Bubble() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0" data-name="Bubble">
      <ContentContainer />
      <VisionElementsBubbleTailVision />
    </div>
  );
}

function VisionElementsMessageBubbleFootprintVision() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0" data-name="Vision / Elements / Message bubble footprint (vision)">
      <Bubble />
    </div>
  );
}

function ChatBubble() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="Chat bubble">
      <VisionElementsMessageBubbleFootprintVision />
    </div>
  );
}

function VisionTextMessageVision() {
  return (
    <div className="relative shrink-0 w-full" data-name="Vision / Text message (vision)">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-end px-[16px] py-0 relative w-full">
          <ChatBubble />
        </div>
      </div>
    </div>
  );
}

function Shape() {
  return (
    <div className="absolute aspect-[160.005/160.005] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Shape">
      <div className="absolute inset-[4.17%_4.17%_4.17%_8.76%]" data-name="Shape">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(147, 47, 251, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
            <g id="Shape">
              <path d={svgPaths.p1eb9ad00} fill="var(--fill-0, #932FFB)" />
              <path d={svgPaths.pcfa5c80} fill="var(--fill-0, #932FFB)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AiAssistantOption() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="ai_assistant-option 2">
      <Shape />
    </div>
  );
}

function AiAssistantIcon() {
  return (
    <div className="absolute content-stretch flex gap-[20px] inset-0 items-center justify-center" data-name=".ai_assistant icon">
      <AiAssistantOption />
    </div>
  );
}

function V() {
  return (
    <div className="aspect-[48/48] h-full relative shrink-0" data-name="V2">
      <AiAssistantIcon />
    </div>
  );
}

function VisionElementsAiLogoAsset() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name=".Vision / Elements / AI logo asset">
      <V />
    </div>
  );
}

function VisionElementsChatAndAiAvatarVision() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Vision / Elements / Chat and AI avatar (vision)">
      <VisionElementsAiLogoAsset />
    </div>
  );
}

function AvatarContainer() {
  return (
    <div className="content-stretch flex items-center justify-center max-h-[36px] min-h-[36px] relative self-stretch shrink-0" data-name="Avatar container">
      <VisionElementsChatAndAiAvatarVision />
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Hmm, I didn’t quite catch that time. Could you please enter it in a format like 9:00 AM or 9:00 PM</p>
    </div>
  );
}

function ElementsAiInboundTextBubbleM2Vision() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Elements / AI inbound text bubble M2 (vision)">
      <Typography />
    </div>
  );
}

function Message() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Message">
      <ElementsAiInboundTextBubbleM2Vision />
    </div>
  );
}

function AvatarAndMessage() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Avatar and message">
      <AvatarContainer />
      <Message />
    </div>
  );
}

function AiInboundTextMessageM2Vision() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="AI inbound text message M2 (vision)">
      <AvatarAndMessage />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="bg-[#f3edfe] content-stretch flex flex-col gap-[2px] items-start justify-end px-[12px] py-[10px] relative rounded-[16px] shrink-0" data-name="Text container">
      <div aria-hidden="true" className="absolute border border-[#cdbaff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Uber_Move_Text:regular',sans-serif] justify-center leading-[0] max-w-[256px] not-italic relative shrink-0 text-[#7a15cf] text-[14px] text-nowrap">
        <p className="leading-[20px]">{`I mean 9am to 5pm  `}</p>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content container">
      <TextContainer1 />
    </div>
  );
}

function TailClip1() {
  return (
    <div className="h-[10px] relative w-[18px]" data-name="Tail clip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
        <g clipPath="url(#clip0_3_72414)" id="Tail clip">
          <path d={svgPaths.p25cc8f00} fill="var(--fill-0, #F3EDFE)" id="Vector" stroke="var(--stroke-0, #CDBAFF)" />
        </g>
        <defs>
          <clipPath id="clip0_3_72414">
            <rect fill="white" height="10" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tail1() {
  return (
    <div className="h-[7.84px] relative w-[18px]" data-name="Tail">
      <div className="absolute flex h-[17.842px] items-center justify-center left-[-2.55px] top-[-0.25px] w-[20.579px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[31deg]">
          <TailClip1 />
        </div>
      </div>
    </div>
  );
}

function VisionElementsBubbleTailVision1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-end justify-end right-[0.01px]" data-name="Vision / Elements / Bubble tail (vision)">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Tail1 />
        </div>
      </div>
    </div>
  );
}

function Bubble1() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0" data-name="Bubble">
      <ContentContainer1 />
      <VisionElementsBubbleTailVision1 />
    </div>
  );
}

function VisionElementsMessageBubbleFootprintVision1() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0" data-name="Vision / Elements / Message bubble footprint (vision)">
      <Bubble1 />
    </div>
  );
}

function ChatBubble1() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="Chat bubble">
      <VisionElementsMessageBubbleFootprintVision1 />
    </div>
  );
}

function VisionTextMessageVision1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Vision / Text message (vision)">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-end px-[16px] py-0 relative w-full">
          <ChatBubble1 />
        </div>
      </div>
    </div>
  );
}

function Shape1() {
  return (
    <div className="absolute aspect-[160.005/160.005] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Shape">
      <div className="absolute inset-[4.17%_4.17%_4.17%_8.76%]" data-name="Shape">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(147, 47, 251, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
            <g id="Shape">
              <path d={svgPaths.p1eb9ad00} fill="var(--fill-0, #932FFB)" />
              <path d={svgPaths.pcfa5c80} fill="var(--fill-0, #932FFB)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AiAssistantOption1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="ai_assistant-option 2">
      <Shape1 />
    </div>
  );
}

function AiAssistantIcon1() {
  return (
    <div className="absolute content-stretch flex gap-[20px] inset-0 items-center justify-center" data-name=".ai_assistant icon">
      <AiAssistantOption1 />
    </div>
  );
}

function V1() {
  return (
    <div className="aspect-[48/48] h-full relative shrink-0" data-name="V2">
      <AiAssistantIcon1 />
    </div>
  );
}

function VisionElementsAiLogoAsset1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name=".Vision / Elements / AI logo asset">
      <V1 />
    </div>
  );
}

function VisionElementsChatAndAiAvatarVision1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Vision / Elements / Chat and AI avatar (vision)">
      <VisionElementsAiLogoAsset1 />
    </div>
  );
}

function AvatarContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center max-h-[36px] min-h-[36px] relative self-stretch shrink-0" data-name="Avatar container">
      <VisionElementsChatAndAiAvatarVision1 />
    </div>
  );
}

function Typography1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">{`Sure, I’ve set your store to be closed from 9:00 AM to 5:00 PM tomorrow. `}</p>
    </div>
  );
}

function ElementsAiInboundTextBubbleM2Vision1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Elements / AI inbound text bubble M2 (vision)">
      <Typography1 />
    </div>
  );
}

function Message1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Message">
      <ElementsAiInboundTextBubbleM2Vision1 />
    </div>
  );
}

function AvatarAndMessage1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Avatar and message">
      <AvatarContainer1 />
      <Message1 />
    </div>
  );
}

function AiInboundTextMessageM2Vision1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="AI inbound text message M2 (vision)">
      <AvatarAndMessage1 />
    </div>
  );
}

function Shape2() {
  return (
    <div className="absolute aspect-[160.005/160.005] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Shape">
      <div className="absolute inset-[4.17%_4.17%_4.17%_8.76%]" data-name="Shape">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(147, 47, 251, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
            <g id="Shape">
              <path d={svgPaths.p1eb9ad00} fill="var(--fill-0, #932FFB)" />
              <path d={svgPaths.pcfa5c80} fill="var(--fill-0, #932FFB)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AiAssistantOption2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="ai_assistant-option 2">
      <Shape2 />
    </div>
  );
}

function AiAssistantIcon2() {
  return (
    <div className="absolute content-stretch flex gap-[20px] inset-0 items-center justify-center" data-name=".ai_assistant icon">
      <AiAssistantOption2 />
    </div>
  );
}

function V2() {
  return (
    <div className="aspect-[48/48] h-full relative shrink-0" data-name="V2">
      <AiAssistantIcon2 />
    </div>
  );
}

function VisionElementsAiLogoAsset2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name=".Vision / Elements / AI logo asset">
      <V2 />
    </div>
  );
}

function VisionElementsChatAndAiAvatarVision2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Vision / Elements / Chat and AI avatar (vision)">
      <VisionElementsAiLogoAsset2 />
    </div>
  );
}

function AvatarContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center max-h-[36px] min-h-[36px] relative self-stretch shrink-0" data-name="Avatar container">
      <VisionElementsChatAndAiAvatarVision2 />
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">{`Your store will still be operational between 5–10 PM according to your existing store hours. `}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-[390px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 0">
        <g id="Divider"></g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2e9e21c0} fill="var(--fill-0, #0E8345)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function CircleCheck() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="circle_check">
      <Icon4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <CircleCheck />
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e8345] text-[14px] text-nowrap">
        <p className="leading-[16px]">Holiday hours updated successfully</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="h-0 relative shrink-0 w-full" data-name="Cell divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <line id="Cell divider" stroke="var(--stroke-0, #F3F3F3)" x2="344" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center leading-[0] not-italic relative shrink-0 text-[14px] w-full">
      <div className="flex flex-col font-['Uber_Move_Text:Regular',sans-serif] justify-center relative shrink-0 text-[#4b4b4b] w-[136px]">
        <p className="leading-[20px]">Date</p>
      </div>
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center relative shrink-0 text-black text-nowrap">
        <p className="leading-[16px]">{`Oct 08, 2025 `}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-0 py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-[142px]">
        <p className="leading-[16px]">05:00 PM – 10:00 PM</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Uber_Move_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[136px]">
        <p className="leading-[20px]">Operational hours</p>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Preview() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Preview">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <Divider />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function ChatBubble2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="chat bubble">
      <Preview />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="data">
      <ChatBubble2 />
    </div>
  );
}

function ChatMessageContainerInboundText() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[112px] items-start relative rounded-[12px] shrink-0 w-[368px]" data-name="Chat / Message container / Inbound / Text">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Data />
    </div>
  );
}

function Message2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Message">
      <ChatMessageContainerInboundText />
    </div>
  );
}

function Typography3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[0px] text-[14px] text-black underline w-[min-content]">
        <span className="[text-underline-position:from-font] decoration-solid">View holiday hours</span>
        <span className="[text-underline-position:from-font] decoration-solid"> </span>
      </p>
    </div>
  );
}

function ElementsAiInboundTextBubbleM2Vision2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Elements / AI inbound text bubble M2 (vision)">
      <Typography3 />
    </div>
  );
}

function ElementsAiInboundTextBubbleM2Vision3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Elements / AI inbound text bubble M2 (vision)">
      <Typography2 />
      <Message2 />
      <ElementsAiInboundTextBubbleM2Vision2 />
    </div>
  );
}

function Message3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Message">
      <ElementsAiInboundTextBubbleM2Vision3 />
    </div>
  );
}

function AvatarAndMessage2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Avatar and message">
      <AvatarContainer2 />
      <Message3 />
    </div>
  );
}

function AiInboundTextMessageM2Vision2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="AI inbound text message M2 (vision)">
      <AvatarAndMessage2 />
    </div>
  );
}

function Shape3() {
  return (
    <div className="absolute aspect-[160.005/160.005] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Shape">
      <div className="absolute inset-[4.17%_4.17%_4.17%_8.76%]" data-name="Shape">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(147, 47, 251, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
            <g id="Shape">
              <path d={svgPaths.p1eb9ad00} fill="var(--fill-0, #932FFB)" />
              <path d={svgPaths.pcfa5c80} fill="var(--fill-0, #932FFB)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AiAssistantOption3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="ai_assistant-option 2">
      <Shape3 />
    </div>
  );
}

function AiAssistantIcon3() {
  return (
    <div className="absolute content-stretch flex gap-[20px] inset-0 items-center justify-center" data-name=".ai_assistant icon">
      <AiAssistantOption3 />
    </div>
  );
}

function V3() {
  return (
    <div className="aspect-[48/48] h-full relative shrink-0" data-name="V2">
      <AiAssistantIcon3 />
    </div>
  );
}

function VisionElementsAiLogoAsset3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name=".Vision / Elements / AI logo asset">
      <V3 />
    </div>
  );
}

function VisionElementsChatAndAiAvatarVision3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Vision / Elements / Chat and AI avatar (vision)">
      <VisionElementsAiLogoAsset3 />
    </div>
  );
}

function AvatarContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center max-h-[36px] min-h-[36px] relative self-stretch shrink-0" data-name="Avatar container">
      <VisionElementsChatAndAiAvatarVision3 />
    </div>
  );
}

function Typography4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Is there anything else you need help with?</p>
    </div>
  );
}

function ElementsAiInboundTextBubbleM2Vision4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Elements / AI inbound text bubble M2 (vision)">
      <Typography4 />
    </div>
  );
}

function Message4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Message">
      <ElementsAiInboundTextBubbleM2Vision4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Message4 />
    </div>
  );
}

function Typography5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">{`I haven’t heard from you in a while. Is it okay if I go  ahead and end the chat?`}</p>
    </div>
  );
}

function ElementsAiInboundTextBubbleM2Vision5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Elements / AI inbound text bubble M2 (vision)">
      <Typography5 />
    </div>
  );
}

function Message5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Message">
      <ElementsAiInboundTextBubbleM2Vision5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Message5 />
    </div>
  );
}

function Typography6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <div className="font-['Uber_Move_Text:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="mb-0">{`Thanks for chatting with me today! Please `}</p>
        <p>reach out again if you need more help.</p>
      </div>
    </div>
  );
}

function ElementsAiInboundTextBubbleM2Vision6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Elements / AI inbound text bubble M2 (vision)">
      <Typography6 />
    </div>
  );
}

function Message6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Message">
      <ElementsAiInboundTextBubbleM2Vision6 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Message6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function AvatarAndMessage3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Avatar and message">
      <AvatarContainer3 />
      <Frame7 />
    </div>
  );
}

function ChatMessageContainerTimestamp() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Chat / Message container / Timestamp">
      <div className="flex flex-col font-['Uber_Move_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] text-center text-nowrap">
        <p className="leading-[16px]">Wed, Feb 27, 9:40am</p>
      </div>
    </div>
  );
}

function Typography7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#545454] text-[16px] text-center w-[min-content]">Conversation has ended</p>
    </div>
  );
}

function ElementsSystemWidgetTextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="☷ Elements / System widget / Text content">
      <Typography7 />
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 1">
        <g clipPath="url(#clip0_3_72344)" id="divider">
          <path clipRule="evenodd" d={svgPaths.p2ffd9d00} fill="var(--fill-0, #E2E2E2)" fillRule="evenodd" id="Line (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_3_72344">
            <rect fill="white" height="1.00003" width="376" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChatMessageContainerSystemStatusModul() {
  return (
    <div className="relative shrink-0 w-full" data-name="Chat / Message container / System / Status modul">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <ChatMessageContainerTimestamp />
          <ElementsSystemWidgetTextContent />
          <Divider1 />
        </div>
      </div>
    </div>
  );
}

function ContentItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Item">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[28px] px-[16px] relative w-full">
          <VisionTextMessageVision />
          <AiInboundTextMessageM2Vision />
          <VisionTextMessageVision1 />
          <AiInboundTextMessageM2Vision1 />
          <AiInboundTextMessageM2Vision2 />
          <AvatarAndMessage3 />
          <ChatMessageContainerSystemStatusModul />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <ContentItem />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pb9563d0} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadingArtwork() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Leading artwork">
      <Icon5 />
    </div>
  );
}

function LeadingArtworkContainer() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Leading artwork container">
      <LeadingArtwork />
    </div>
  );
}

function InputElementContentText() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[16px] w-[min-content]">Ask me anything...</p>
        </div>
      </div>
    </div>
  );
}

function InputElementTextField() {
  return (
    <div className="bg-[#f3f3f3] h-[48px] relative rounded-[36px] shrink-0 w-full" data-name="Input element / Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeadingArtworkContainer />
          <InputElementContentText />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Text field">
      <InputElementTextField />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3812800} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[12px]" data-name="arrow_up">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center p-[6px] relative rounded-[36px] shrink-0 size-[28px]" data-name="Icon">
      <ArrowUp />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <Icon7 />
    </div>
  );
}

function ElementSmallSendButton() {
  return (
    <div className="absolute content-stretch flex items-end justify-center p-[8px] right-0 top-1/2 translate-y-[-50%]" data-name=".Element / Small send button">
      <Button3 />
    </div>
  );
}

function ElementsBetaComposerBarAiVision() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[1]" data-name="Elements / Beta composer bar AI (vision)">
      <TextField />
      <ElementSmallSendButton />
    </div>
  );
}

function ComposerBar() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full" data-name="Composer bar">
      <ElementsBetaComposerBarAiVision />
    </div>
  );
}

function InputsAndDisclaimer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Inputs and disclaimer">
      <ComposerBar />
    </div>
  );
}

function ComposerContainer() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter basis-0 content-stretch flex flex-col gap-[8px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0 z-[1]" data-name="Composer container" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.76) 0%, rgba(255, 255, 255, 0.76) 100%)" }}>
      <InputsAndDisclaimer />
    </div>
  );
}

function AddInput() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Add + Input">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ComposerContainer />
      </div>
    </div>
  );
}

function InputDisclosure() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input + disclosure">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[16px] py-0 relative w-full">
          <AddInput />
        </div>
      </div>
    </div>
  );
}

function AiChatCompose() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[89px] items-center justify-end min-w-[375px] px-0 py-[16px] relative rounded-[12px] shrink-0 w-[440px]" data-name="AI chat compose">
      <InputDisclosure />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Content">
      <WebHeader />
      <Container1 />
      <AiChatCompose />
    </div>
  );
}

export default function AltAiResponse() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="alt ai response">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Content1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cdbaff] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_16px_48px_0px_rgba(0,0,0,0.22)]" />
    </div>
  );
}