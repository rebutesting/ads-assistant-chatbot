import svgPaths from "./svg-sjt0mxiofn";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p391bbfc0} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="arrow_left">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[14px] relative rounded-[48px] shrink-0" data-name="Icon">
      <ArrowLeft />
    </div>
  );
}

function ActionLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="Action left">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p20992700} fill="var(--fill-0, black)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[28px]" data-name="heart">
      <Icon2 />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Image container">
      <Heart />
    </div>
  );
}

function ArtworkContainerIcon() {
  return (
    <div className="content-stretch flex gap-[64px] isolate items-center justify-center relative shrink-0" data-name="Artwork container / Icon">
      <ImageContainer />
    </div>
  );
}

function ArtworkFrame() {
  return (
    <div className="content-stretch flex h-full items-center justify-center min-h-[64px] px-[8px] py-[12px] relative shrink-0" data-name="Artwork frame">
      <ArtworkContainerIcon />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Title</p>
    </div>
  );
}

function Metadata() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Metadata">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Metadata</p>
    </div>
  );
}

function TextFrame() {
  return (
    <div className="basis-0 grow min-h-[64px] min-w-px relative shrink-0" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] px-[8px] py-[12px] relative w-full">
          <Title />
          <Metadata />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">Action</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Content />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button />
    </div>
  );
}

function ControlFrame() {
  return (
    <div className="content-stretch flex h-full items-center justify-end px-[8px] py-[10px] relative shrink-0" data-name="Control frame">
      <Button1 />
    </div>
  );
}

function ChatHeaderWeb() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 px-[8px] py-0 top-0 w-[375px]" data-name="Chat header web">
      <ActionLeft />
      <div className="flex flex-row items-center self-stretch">
        <ArtworkFrame />
      </div>
      <TextFrame />
      <div className="flex flex-row items-center self-stretch">
        <ControlFrame />
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="shrink-0 size-[4px]" data-name="Spacer" />;
}

function Spacer004Pt() {
  return (
    <div className="content-stretch flex flex-col h-[6px] items-center overflow-clip relative shrink-0 w-full" data-name="Spacer / 004 pt">
      <Spacer />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">Be right there</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Content1 />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button2 />
    </div>
  );
}

function ElementsWebPillButtonPrompt() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Elements / Web / Pill button prompt">
      <Button3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">I am here</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Content2 />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button4 />
    </div>
  );
}

function ElementsWebPillButtonPrompt1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Elements / Web / Pill button prompt">
      <Button5 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">On my way</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Content3 />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button6 />
    </div>
  );
}

function ElementsWebPillButtonPrompt2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Elements / Web / Pill button prompt">
      <Button7 />
    </div>
  );
}

function Order() {
  return (
    <div className="relative shrink-0 w-full" data-name="Order">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-0 relative w-full">
          <ElementsWebPillButtonPrompt />
          <ElementsWebPillButtonPrompt1 />
          <ElementsWebPillButtonPrompt2 />
        </div>
      </div>
    </div>
  );
}

function ElementsPillButtonPrompt() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Elements / Pill button prompt">
      <Order />
    </div>
  );
}

function InputElementContentText() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Message...</p>
        </div>
      </div>
    </div>
  );
}

function InputElementTextField() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Text field">
      <InputElementTextField />
    </div>
  );
}

function ElementsInputWebInputTypesEmpty() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] right-[60px] top-[12px]" data-name="Elements / Input / Web / Input types / Empty">
      <TextField />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_38_24146)" id="Icon">
          <path d={svgPaths.p1ecb8800} fill="var(--fill-0, #A6A6A6)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_38_24146">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PaperAirplane() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="paper_airplane">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-center justify-center p-[10px] relative rounded-[36px] shrink-0 size-[36px]" data-name="Icon">
      <PaperAirplane />
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[6px] relative shrink-0" data-name="Button">
      <Icon4 />
    </div>
  );
}

function ElementsWebSendButton() {
  return (
    <div className="absolute content-stretch flex items-start right-[6px] top-[6px]" data-name="Elements / Web / Send button">
      <Button8 />
    </div>
  );
}

function ElementsWebInputBarEmpty() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="Elements / Web / Input bar / Empty">
      <ElementsInputWebInputTypesEmpty />
      <ElementsWebSendButton />
    </div>
  );
}

function ComposerMobileIOsTextKeyboardDown() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-center left-1/2 translate-x-[-50%] w-[376px]" data-name="Composer / Mobile / iOS / Text / Keyboard down">
      <Spacer004Pt />
      <ElementsPillButtonPrompt />
      <ElementsWebInputBarEmpty />
    </div>
  );
}

function Screen() {
  return (
    <div className="bg-white h-[612px] overflow-clip relative rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] shrink-0 w-[376px]" data-name="Screen">
      <ChatHeaderWeb />
      <ComposerMobileIOsTextKeyboardDown />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p39cc1e00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="x">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center p-[14px] relative rounded-[48px] shadow-[0px_16px_48px_0px_rgba(60,63,151,0.18)] shrink-0" data-name="Icon">
      <X />
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <Icon6 />
    </div>
  );
}

function BadgeContainer() {
  return <div className="absolute content-stretch flex items-center justify-center right-0 size-[12px] top-0" data-name="Badge container" />;
}

function TodayFloatingAiChatButtonToday() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center p-[2px] relative rounded-[56px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] shrink-0 size-[48px]" data-name="Today / Floating AI & chat button (today)">
      <Button9 />
      <BadgeContainer />
    </div>
  );
}

export default function DeviceScreenWebDesktopViewEmbeddedExpanded() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end p-[16px] relative size-full" data-name="Device screen / Web / Desktop view / Embedded / Expanded">
      <Screen />
      <TodayFloatingAiChatButtonToday />
    </div>
  );
}