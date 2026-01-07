import svgPaths from "./svg-5yfo14y0nz";
import imgHero from "figma:asset/2762e1944038d03a7c07b89fdcca7c2d885b0e1d.png";

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[28px] text-black text-nowrap">Create a bundled campaign</p>
    </div>
  );
}

function Spacer() {
  return <div className="shrink-0 size-[8px]" data-name="Spacer" />;
}

function Spacer1() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Spacer">
      <Spacer />
    </div>
  );
}

function Typography1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Combine an ad and offer in one campaign to maximize your sales impact.</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Description">
      <Typography1 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-0 relative w-full">
          <Typography />
          <Spacer1 />
          <Description />
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[520px]" data-name="Header">
      <Header />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.ped7800} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Storefront() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="storefront">
      <Icon />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Image container">
      <Storefront />
    </div>
  );
}

function LeadingArtwork() {
  return (
    <div className="content-stretch flex gap-[64px] isolate items-center justify-center relative rounded-[4px] shrink-0" data-name="Leading artwork">
      <ImageContainer />
    </div>
  );
}

function LeadingContent() {
  return (
    <div className="content-stretch flex h-full items-center justify-center min-h-[64px] min-w-[48px] px-[8px] py-[12px] relative shrink-0" data-name="Leading content">
      <LeadingArtwork />
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Stores</p>
    </div>
  );
}

function Typography3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">123 St. Store</p>
    </div>
  );
}

function ContentLeading() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content leading">
      <Typography2 />
      <Typography3 />
    </div>
  );
}

function MainText() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Main text">
      <ContentLeading />
    </div>
  );
}

function TextFrame() {
  return (
    <div className="basis-0 grow min-h-[64px] min-w-px relative shrink-0" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] px-[8px] py-[12px] relative w-full">
          <MainText />
        </div>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filled">
          <path d={svgPaths.p1f23ce00} fill="var(--fill-0, #5E5E5E)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function ControlFrame() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center min-w-[48px] px-[8px] py-[16px] relative shrink-0" data-name="Control frame">
      <Chevron />
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <LeadingContent />
          </div>
          <TextFrame />
          <ControlFrame />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Cell divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 488 1">
            <line id="Cell divider" stroke="var(--stroke-0, #F3F3F3)" x2="488" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InsetWrapper() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Inset wrapper">
      <ContentFrame />
      <Divider />
    </div>
  );
}

function Accordion() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end justify-center overflow-clip px-[16px] py-0 relative shrink-0 w-[520px]" data-name="Accordion">
      <InsetWrapper />
    </div>
  );
}

function MainExperienceStore() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main experience/Store">
      <Accordion />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_5_135643)" id="Icon">
          <g id="Shape">
            <path d={svgPaths.p3ad6e400} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p3a062140} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_135643">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Center() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="center">
      <Icon1 />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Image container">
      <Center />
    </div>
  );
}

function LeadingArtwork1() {
  return (
    <div className="content-stretch flex gap-[64px] isolate items-center justify-center relative rounded-[4px] shrink-0" data-name="Leading artwork">
      <ImageContainer1 />
    </div>
  );
}

function LeadingContent1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center min-h-[64px] min-w-[48px] px-[8px] py-[12px] relative shrink-0" data-name="Leading content">
      <LeadingArtwork1 />
    </div>
  );
}

function Typography4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Audience</p>
    </div>
  );
}

function Typography5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">All customers</p>
    </div>
  );
}

function ContentLeading1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content leading">
      <Typography4 />
      <Typography5 />
    </div>
  );
}

function MainText1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Main text">
      <ContentLeading1 />
    </div>
  );
}

function TextFrame1() {
  return (
    <div className="basis-0 grow min-h-[64px] min-w-px relative shrink-0" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] px-[8px] py-[12px] relative w-full">
          <MainText1 />
        </div>
      </div>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filled">
          <path d={svgPaths.p1f23ce00} fill="var(--fill-0, #5E5E5E)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function ControlFrame1() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center min-w-[48px] px-[8px] py-[16px] relative shrink-0" data-name="Control frame">
      <Chevron1 />
    </div>
  );
}

function ContentFrame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <LeadingContent1 />
          </div>
          <TextFrame1 />
          <ControlFrame1 />
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Cell divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 488 1">
            <line id="Cell divider" stroke="var(--stroke-0, #F3F3F3)" x2="488" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InsetWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Inset wrapper">
      <ContentFrame1 />
      <Divider1 />
    </div>
  );
}

function Accordion1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[16px] py-0 relative w-full">
          <InsetWrapper1 />
        </div>
      </div>
    </div>
  );
}

function Audience() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[520px]" data-name="Audience">
      <Accordion1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p154c3000} fill="var(--fill-0, black)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Calendar() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="calendar">
      <Icon2 />
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Image container">
      <Calendar />
    </div>
  );
}

function LeadingArtwork2() {
  return (
    <div className="content-stretch flex gap-[64px] isolate items-center justify-center relative rounded-[4px] shrink-0" data-name="Leading artwork">
      <ImageContainer2 />
    </div>
  );
}

function LeadingContent2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center min-h-[64px] min-w-[48px] px-[8px] py-[12px] relative shrink-0" data-name="Leading content">
      <LeadingArtwork2 />
    </div>
  );
}

function Typography6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Duration</p>
    </div>
  );
}

function Typography7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">11/30/2025–Ongoing</p>
    </div>
  );
}

function ContentLeading2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content leading">
      <Typography6 />
      <Typography7 />
    </div>
  );
}

function MainText2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Main text">
      <ContentLeading2 />
    </div>
  );
}

function TextFrame2() {
  return (
    <div className="basis-0 grow min-h-[64px] min-w-px relative shrink-0" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] px-[8px] py-[12px] relative w-full">
          <MainText2 />
        </div>
      </div>
    </div>
  );
}

function Chevron2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filled">
          <path d={svgPaths.p1f23ce00} fill="var(--fill-0, #5E5E5E)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function ControlFrame2() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center min-w-[48px] px-[8px] py-[16px] relative shrink-0" data-name="Control frame">
      <Chevron2 />
    </div>
  );
}

function ContentFrame2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <LeadingContent2 />
          </div>
          <TextFrame2 />
          <ControlFrame2 />
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Cell divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 488 1">
            <line id="Cell divider" stroke="var(--stroke-0, #F3F3F3)" x2="488" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InsetWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Inset wrapper">
      <ContentFrame2 />
      <Divider2 />
    </div>
  );
}

function Accordion2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[16px] py-0 relative w-full">
          <InsetWrapper2 />
        </div>
      </div>
    </div>
  );
}

function Duration() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[520px]" data-name="Duration">
      <Accordion2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.p28c46180} fill="var(--fill-0, black)" />
            <path d={svgPaths.p17e29e80} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Megaphone() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="megaphone">
      <Icon3 />
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Image container">
      <Megaphone />
    </div>
  );
}

function LeadingArtwork3() {
  return (
    <div className="content-stretch flex gap-[64px] isolate items-center justify-center relative rounded-[4px] shrink-0" data-name="Leading artwork">
      <ImageContainer3 />
    </div>
  );
}

function LeadingContent3() {
  return (
    <div className="content-stretch flex h-full items-center justify-center min-h-[64px] min-w-[48px] px-[8px] py-[12px] relative shrink-0" data-name="Leading content">
      <LeadingArtwork3 />
    </div>
  );
}

function Typography8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Ad</p>
    </div>
  );
}

function Typography9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Spend may vary day to day but will even out over a week</p>
    </div>
  );
}

function ContentLeading3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content leading">
      <Typography8 />
      <Typography9 />
    </div>
  );
}

function MainText3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Main text">
      <ContentLeading3 />
    </div>
  );
}

function TextFrame3() {
  return (
    <div className="basis-0 grow min-h-[64px] min-w-px relative shrink-0" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] px-[8px] py-[12px] relative w-full">
          <MainText3 />
        </div>
      </div>
    </div>
  );
}

function Chevron3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filled">
          <path d={svgPaths.p9346600} fill="var(--fill-0, #5E5E5E)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function ControlFrame3() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center min-w-[48px] px-[8px] py-[16px] relative shrink-0" data-name="Control frame">
      <Chevron3 />
    </div>
  );
}

function ContentFrame3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <LeadingContent3 />
          </div>
          <TextFrame3 />
          <ControlFrame3 />
        </div>
      </div>
    </div>
  );
}

function Typography10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Daily ad budget</p>
    </div>
  );
}

function InputElementLabel() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography10 />
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text field">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pl-[64px] pr-0 py-0 relative w-full">
          <InputElementLabel />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">$10</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
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

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">$20</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
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

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[16px]">$30</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
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

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">$40</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
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

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">Custom</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <Content4 />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button8 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button group">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-[8px] items-start pl-[64px] pr-0 py-0 relative w-full">
          <Button1 />
          <Button3 />
          <Button5 />
          <Button7 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_5_135674)" id="Icon">
          <g id="Shape">
            <path d={svgPaths.p3965ce00} fill="var(--fill-0, #5E5E5E)" />
            <path d={svgPaths.p20bae200} fill="var(--fill-0, #5E5E5E)" />
            <path clipRule="evenodd" d={svgPaths.p12d6b700} fill="var(--fill-0, #5E5E5E)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_135674">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CircleI() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[12px]" data-name="circle_i">
      <Icon4 />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="content-stretch flex items-start px-0 py-[4px] relative shrink-0" data-name="Icon frame">
      <CircleI />
    </div>
  );
}

function Hint() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Hint">
      <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">$30 ad budget is recommended to maximize sales</p>
    </div>
  );
}

function InputElementHint() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input element / Hint">
      <div className="size-full">
        <div className="content-stretch flex gap-[8px] items-start pl-[64px] pr-0 py-0 relative w-full">
          <IconFrame />
          <Hint />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <TextField />
      <ButtonGroup />
      <InputElementHint />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function CardElementLineItem() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[12px] px-0 relative shrink-0 w-full" data-name="Card element - Line item">
      <Frame6 />
    </div>
  );
}

function CardElementLineItem1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Card element - Line item">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[16px] py-0 relative w-full">
          <CardElementLineItem />
        </div>
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[64px] pr-0 py-0 relative w-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Cell divider">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424 1">
                <line id="Cell divider" stroke="var(--stroke-0, #F3F3F3)" x2="424" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Cell divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 488 1">
            <line id="Cell divider" stroke="var(--stroke-0, #F3F3F3)" x2="488" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InsetWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Inset wrapper">
      <ContentFrame3 />
      <CardElementLineItem1 />
      <Divider3 />
      <Divider4 />
    </div>
  );
}

function Accordion3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[16px] py-0 relative w-full">
          <InsetWrapper3 />
        </div>
      </div>
    </div>
  );
}

function MainExperience() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[520px]" data-name="Main experience">
      <Accordion3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cfaa300} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="tag">
      <Icon5 />
    </div>
  );
}

function ImageContainer4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Image container">
      <Tag />
    </div>
  );
}

function LeadingArtwork4() {
  return (
    <div className="content-stretch flex gap-[64px] isolate items-center justify-center relative rounded-[4px] shrink-0" data-name="Leading artwork">
      <ImageContainer4 />
    </div>
  );
}

function LeadingContent4() {
  return (
    <div className="content-stretch flex h-full items-center justify-center min-h-[64px] min-w-[48px] px-[8px] py-[12px] relative shrink-0" data-name="Leading content">
      <LeadingArtwork4 />
    </div>
  );
}

function Typography11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Percent off order offer</p>
    </div>
  );
}

function Typography12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">30% off by spending $15 or more</p>
    </div>
  );
}

function ContentLeading4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content leading">
      <Typography11 />
      <Typography12 />
    </div>
  );
}

function MainText4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Main text">
      <ContentLeading4 />
    </div>
  );
}

function TextFrame4() {
  return (
    <div className="basis-0 grow min-h-[64px] min-w-px relative shrink-0" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] px-[8px] py-[12px] relative w-full">
          <MainText4 />
        </div>
      </div>
    </div>
  );
}

function Chevron4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filled">
          <path d={svgPaths.p1f23ce00} fill="var(--fill-0, #5E5E5E)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function ControlFrame4() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center min-w-[48px] px-[8px] py-[16px] relative shrink-0" data-name="Control frame">
      <Chevron4 />
    </div>
  );
}

function ContentFrame4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <LeadingContent4 />
          </div>
          <TextFrame4 />
          <ControlFrame4 />
        </div>
      </div>
    </div>
  );
}

function Divider5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Cell divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 488 1">
            <line id="Cell divider" stroke="var(--stroke-0, #F3F3F3)" x2="488" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InsetWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Inset wrapper">
      <ContentFrame4 />
      <Divider5 />
    </div>
  );
}

function Accordion4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[16px] py-0 relative w-full">
          <InsetWrapper4 />
        </div>
      </div>
    </div>
  );
}

function MainExperience1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[520px]" data-name="Main experience">
      <Accordion4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_5_135617)" id="Icon">
          <path d={svgPaths.p1c74dc40} fill="var(--fill-0, black)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_5_135617">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ClipboardPencil() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="clipboard_pencil">
      <Icon6 />
    </div>
  );
}

function ImageContainer5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Image container">
      <ClipboardPencil />
    </div>
  );
}

function LeadingArtwork5() {
  return (
    <div className="content-stretch flex gap-[64px] isolate items-center justify-center relative rounded-[4px] shrink-0" data-name="Leading artwork">
      <ImageContainer5 />
    </div>
  );
}

function LeadingContent5() {
  return (
    <div className="content-stretch flex h-full items-center justify-center min-h-[64px] min-w-[48px] px-[8px] py-[12px] relative shrink-0" data-name="Leading content">
      <LeadingArtwork5 />
    </div>
  );
}

function Typography13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Campaign name</p>
    </div>
  );
}

function Typography14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Holiday sales</p>
    </div>
  );
}

function ContentLeading5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content leading">
      <Typography13 />
      <Typography14 />
    </div>
  );
}

function MainText5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Main text">
      <ContentLeading5 />
    </div>
  );
}

function TextFrame5() {
  return (
    <div className="basis-0 grow min-h-[64px] min-w-px relative shrink-0" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] px-[8px] py-[12px] relative w-full">
          <MainText5 />
        </div>
      </div>
    </div>
  );
}

function Chevron5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filled">
          <path d={svgPaths.p1f23ce00} fill="var(--fill-0, #5E5E5E)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function ControlFrame5() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center min-w-[48px] px-[8px] py-[16px] relative shrink-0" data-name="Control frame">
      <Chevron5 />
    </div>
  );
}

function ContentFrame5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <LeadingContent5 />
          </div>
          <TextFrame5 />
          <ControlFrame5 />
        </div>
      </div>
    </div>
  );
}

function Divider6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Cell divider">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <line id="Cell divider" opacity="0" stroke="var(--stroke-0, #F3F3F3)" x2="488" y1="-0.5" y2="-0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InsetWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Inset wrapper">
      <ContentFrame5 />
      <Divider6 />
    </div>
  );
}

function Accordion5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Accordion">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[16px] py-0 relative w-full">
          <InsetWrapper5 />
        </div>
      </div>
    </div>
  );
}

function MainExperienceCampaignName() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-start relative shrink-0 w-[520px]" data-name="Main experience/Campaign name">
      <Accordion5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <MainExperienceStore />
      <Audience />
      <Duration />
      <MainExperience />
      <MainExperience1 />
      <MainExperienceCampaignName />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[520px]">
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Header1 />
      <Frame3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p76d1380} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxChecked() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox_checked">
      <Icon7 />
    </div>
  );
}

function Typography15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Typography">
      <CheckboxChecked />
      <p className="basis-0 font-['Uber_Move_Text:Regular',sans-serif] font-['Uber_Move_Text:regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-[14px] text-black">
        <span>{`I accept the `}</span>
        <span className="[text-underline-position:from-font] decoration-solid underline">{`Terms & Conditions`}</span>
      </p>
    </div>
  );
}

function TextFrame6() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] pl-0 pr-[16px] py-[8px] relative w-full">
          <Typography15 />
        </div>
      </div>
    </div>
  );
}

function ContentCellDivider() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content + cell divider">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[8px] pr-0 py-0 relative w-full">
          <TextFrame6 />
        </div>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="List item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[8px] pr-0 py-0 relative size-full">
          <ContentCellDivider />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Uber_Move_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[24px]">Create campaign</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[16px] relative w-full">
          <Label />
        </div>
      </div>
    </div>
  );
}

function ConfirmButton() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Confirm button">
      <Button10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#eaf6ed] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full">
      <ConfirmButton />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Button container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-0 relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Spacer2() {
  return <div className="shrink-0 size-[16px]" data-name="Spacer" />;
}

function Spacer3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Spacer">
      <Spacer2 />
    </div>
  );
}

function ButtonDock() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button dock">
      <ListItem />
      <ButtonContainer />
      <Spacer3 />
    </div>
  );
}

function MainExperience2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[520px]" data-name="Main experience">
      <ButtonDock />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[774px] items-start relative shrink-0 w-[520px]" data-name="Content">
      <Frame2 />
      <MainExperience2 />
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filled">
          <path d={svgPaths.p2a32c8f0} fill="var(--fill-0, black)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[14px] relative rounded-[48px] shrink-0" data-name="Icon">
      <X />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[48px] top-[48px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="basis-0 bg-white grow h-[1126px] min-h-px min-w-px relative shrink-0" data-name="Left panel">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[160px] pt-[120px] px-[160px] relative size-full">
          <Content5 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[16px]">Feed</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[36px] shrink-0" data-name="Button">
      <Content6 />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative shrink-0" data-name="Button">
      <Button12 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">Storefront</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Content7 />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative shrink-0" data-name="Button">
      <Button14 />
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Button group">
      <Button13 />
      <Button15 />
    </div>
  );
}

function Icon9() {
  return <div className="bg-[#f3f3f3] content-stretch flex items-center justify-center p-[7px] rounded-[25.2px] shrink-0 size-[25.2px]" data-name="Icon" />;
}

function Button16() {
  return (
    <div className="content-stretch flex flex-col gap-[5.6px] items-center justify-center relative shrink-0" data-name="Button">
      <Icon9 />
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section heading">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[11.2px] items-center pb-[8.4px] pt-[11.2px] px-[11.2px] relative w-full">
          <div className="basis-0 bg-[#f3f3f3] grow h-[19.6px] min-h-px min-w-px rounded-[2.8px] shrink-0" data-name="Skeleton" />
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function MerchantHeaderImage() {
  return <div className="absolute bg-[#f3f3f3] inset-0" data-name="Merchant header image" />;
}

function Hero() {
  return (
    <div className="bg-[#f3f3f3] h-[88.9px] overflow-clip relative rounded-[8.4px] shrink-0 w-full" data-name="Hero">
      <MerchantHeaderImage />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="bg-[#f3f3f3] h-[14px] rounded-[2.8px] shrink-0 w-full" data-name="Bar 1" />
      <div className="bg-[#f3f3f3] h-[11.2px] rounded-[2.8px] shrink-0 w-[117.6px]" data-name="Bar 2" />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[19.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1da32200} fill="var(--fill-0, #F3F3F3)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Circle() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16.8px]" data-name="circle">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11.2px] relative rounded-[39.2px] shrink-0 size-[39.2px]" data-name="Icon">
      <Circle />
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex flex-col gap-[5.6px] items-center justify-center relative shrink-0 size-[14px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function Metadata() {
  return (
    <div className="content-stretch flex gap-[44.8px] items-start relative shrink-0 w-full" data-name="Metadata">
      <Content8 />
      <Button17 />
    </div>
  );
}

function StoreMetadata() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Store metadata">
      <Metadata />
    </div>
  );
}

function MerchantCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8.4px] items-center relative shrink-0 w-[158.2px]" data-name="Merchant card">
      <Hero />
      <StoreMetadata />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[5.6px] items-start pb-[11.2px] pt-0 px-[11.2px] relative shrink-0" data-name="Cards">
      {[...Array(2).keys()].map((_, i) => (
        <MerchantCard key={i} />
      ))}
    </div>
  );
}

function Divider7() {
  return (
    <div className="h-0 relative shrink-0 w-[262.5px]" data-name="Divider">
      <div className="absolute inset-[-0.7px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 1">
          <g id="Divider">
            <line id="Cell divider" stroke="var(--stroke-0, #F3F3F3)" strokeWidth="0.7" x1="3.06078e-08" x2="262.5" y1="0.350023" y2="0.35" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StoreCardLarge() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[262.5px]" data-name="Store card large">
      <SectionHeading />
      <Cards />
      <Divider7 />
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading">
      <p className="font-['Uber_Move:Bold',sans-serif] leading-[19.6px] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.175px] w-[min-content]">All stores</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[5.6px] items-center relative shrink-0 w-full" data-name="Frame">
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <Frame />
    </div>
  );
}

function SectionHeading1() {
  return (
    <div className="bg-white content-stretch flex gap-[11.2px] items-center overflow-clip pb-[8.4px] pt-[11.2px] px-[11.2px] relative shrink-0 w-[262.5px]" data-name="Section heading">
      <Heading1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Uber_Move_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8.4px] text-nowrap text-white">
        <p className="leading-[11.2px]">30% off $15+</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex gap-[2.8px] items-center relative shrink-0" data-name="Content">
      <Label1 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#de1135] min-h-[14px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] px-[2.8px] py-[1.4px] relative w-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[5.6px] rounded-[2.8px] top-[5.6px]" data-name="Tag">
      <Container />
    </div>
  );
}

function Hero1() {
  return (
    <div className="bg-[#f3f3f3] h-[103.6px] relative rounded-[8.4px] shrink-0 w-[240.1px]" data-name="Hero">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHero} />
        <Tag1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.7px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8.4px]" />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[8.4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2dc937d0} fill="var(--fill-0, #9F6402)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function UberOne() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[8.4px]" data-name="uber_one">
      <Icon12 />
    </div>
  );
}

function DeliveryFee() {
  return (
    <div className="content-stretch flex gap-[1.4px] items-center relative shrink-0" data-name="Delivery fee">
      <UberOne />
      <div className="flex flex-col font-['Uber_Move_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9f6402] text-[9.8px] text-nowrap">
        <p className="leading-[14px]">$0 Delivery Fee</p>
      </div>
    </div>
  );
}

function AtomMetadataLine() {
  return (
    <div className="content-stretch flex gap-[2.8px] items-center relative shrink-0" data-name="[Atom] Metadata Line 2">
      <DeliveryFee />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[8.4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g clipPath="url(#clip0_5_135386)" id="Icon">
          <path d={svgPaths.p28670600} fill="var(--fill-0, black)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_5_135386">
            <rect fill="white" height="8.4" width="8.4" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[8.4px]" data-name="star">
      <Icon13 />
    </div>
  );
}

function RatingStar() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Rating + star">
      <div className="flex flex-col font-['Uber_Move_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.8px] text-black text-nowrap">
        <p className="leading-[11.2px]">4.9</p>
      </div>
      <Star />
    </div>
  );
}

function Ratings() {
  return (
    <div className="content-stretch flex gap-[1.4px] items-center relative shrink-0" data-name="Ratings">
      <RatingStar />
      <div className="flex flex-col font-['Uber_Move_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5e] text-[9.8px] text-nowrap">
        <p className="leading-[14px]">(1,950+)</p>
      </div>
    </div>
  );
}

function Eta() {
  return (
    <div className="content-stretch flex font-['Uber_Move_Text:Regular',sans-serif] gap-[2.8px] items-center leading-[0] not-italic relative shrink-0 text-[#5e5e5e] text-[9.8px] text-nowrap" data-name="ETA">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[14px] text-nowrap">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[14px] text-nowrap">10 min</p>
      </div>
    </div>
  );
}

function AtomMetadataLine1() {
  return (
    <div className="content-stretch flex gap-[2.8px] h-[14px] items-center relative shrink-0" data-name="[Atom] Metadata Line 3">
      <Ratings />
      <Eta />
      <div className="flex flex-col font-['Uber_Move_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5e] text-[9.8px] text-nowrap">
        <p className="leading-[14px]">•</p>
      </div>
      <div className="flex flex-col font-['Uber_Move_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5e] text-[9.8px] text-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[14px] underline">Sponsored</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[14px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[11.2px] text-black text-nowrap w-[min-content]">{`Salt & Straw`}</p>
      <AtomMetadataLine />
      <AtomMetadataLine1 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p20dc7e70} fill="var(--fill-0, #5E5E5E)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="heart">
      <Icon14 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex items-center justify-center p-[9.8px] relative rounded-[33.6px] shrink-0" data-name="Icon">
      <Heart />
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex flex-col gap-[5.6px] items-center justify-center relative shrink-0 size-[14px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function FavoriteButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Favorite Button">
      <Button18 />
    </div>
  );
}

function StoreMetadata1() {
  return (
    <div className="content-stretch flex gap-[11.2px] items-start relative shrink-0 w-[240.1px]" data-name="Store metadata">
      <Content10 />
      <FavoriteButton />
    </div>
  );
}

function MerchantCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8.4px] items-center relative shrink-0" data-name="Merchant card">
      <Hero1 />
      <StoreMetadata1 />
    </div>
  );
}

function MerchantHeaderImage1() {
  return <div className="absolute bg-[#f3f3f3] inset-0" data-name="Merchant header image" />;
}

function Hero2() {
  return (
    <div className="bg-[#f3f3f3] h-[103.6px] overflow-clip relative rounded-[8.4px] shrink-0 w-full" data-name="Hero">
      <MerchantHeaderImage1 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="bg-[#f3f3f3] h-[14px] rounded-[2.8px] shrink-0 w-full" data-name="Bar 1" />
      <div className="bg-[#f3f3f3] h-[11.2px] rounded-[2.8px] shrink-0 w-[117.6px]" data-name="Bar 2" />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[19.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1da32200} fill="var(--fill-0, #F3F3F3)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Circle1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16.8px]" data-name="circle">
      <Icon16 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11.2px] relative rounded-[39.2px] shrink-0 size-[39.2px]" data-name="Icon">
      <Circle1 />
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex flex-col gap-[5.6px] items-center justify-center relative shrink-0 size-[14px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function Metadata1() {
  return (
    <div className="content-stretch flex gap-[44.8px] items-start relative shrink-0 w-full" data-name="Metadata">
      <Content11 />
      <Button19 />
    </div>
  );
}

function StoreMetadata2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Store metadata">
      <Metadata1 />
    </div>
  );
}

function MerchantCard2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8.4px] items-center relative shrink-0 w-[240.1px]" data-name="Merchant card">
      <Hero2 />
      <StoreMetadata2 />
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[11.2px] items-start pb-[11.2px] pt-0 px-[11.2px] relative w-full">
          <MerchantCard1 />
          {[...Array(2).keys()].map((_, i) => (
            <MerchantCard2 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Feed() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-44.1px] w-[262.5px]" data-name="Feed">
      <StoreCardLarge />
      <SectionHeading1 />
      <List />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[30.8px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute h-[7.676px] right-[30.61px] top-[11.9px] w-[10.691px]" data-name="Wifi">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
            <path clipRule="evenodd" d={svgPaths.p31ea03c0} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] left-[33.6px] not-italic text-[10.5px] text-black text-center top-[16.3px] translate-x-[-50%] translate-y-[-50%] w-[29.4px]">
        <p className="leading-[12.6px]">9:41</p>
      </div>
      <div className="absolute bg-[#f3f3f3] h-[11.2px] left-[191.8px] rounded-[2.8px] top-[10.5px] w-[15.4px]" data-name="Bar 3" />
      <div className="absolute bg-[#f3f3f3] h-[11.2px] left-[210.7px] rounded-[2.8px] top-[10.5px] w-[32.9px]" data-name="Bar 4" />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[262.5px]" data-name="Status bar">
      <Container1 />
      <div className="absolute bg-[#f3f3f3] h-[11.2px] left-[21.7px] rounded-[2.8px] top-[9.8px] w-[26.6px]" data-name="Bar 2" />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[11.2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1de02580} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDownSmall() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[11.2px]" data-name="chevron_down_small">
      <Icon18 />
    </div>
  );
}

function Address() {
  return (
    <div className="basis-0 content-stretch flex gap-[1.4px] grow h-[14px] items-center min-h-px min-w-px relative shrink-0" data-name="Address">
      <div className="bg-[#f3f3f3] h-[11.2px] rounded-[2.8px] shrink-0 w-[68.6px]" data-name="Bar 2" />
      <ChevronDownSmall />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_135448)" id="Icon">
          <path d={svgPaths.p3a821a00} fill="var(--fill-0, black)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_5_135448">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="search">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="content-stretch flex items-center justify-center p-[9.8px] relative shrink-0" data-name="Icon">
      <Search />
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.6px] items-center justify-center left-0 top-0" data-name="Button">
      <Icon20 />
    </div>
  );
}

function ActionTertiary() {
  return (
    <div className="overflow-clip relative shrink-0 size-[33.6px]" data-name="Action Tertiary">
      <Button20 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p18780500} fill="var(--fill-0, black)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Bell() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="bell">
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="content-stretch flex items-center justify-center p-[9.8px] relative shrink-0" data-name="Icon">
      <Bell />
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.6px] items-center justify-center left-0 top-0" data-name="Button">
      <Icon22 />
    </div>
  );
}

function ActionSecondary() {
  return (
    <div className="overflow-clip relative shrink-0 size-[33.6px]" data-name="Action Secondary">
      <Button21 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.p2eb8cd00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p10f51d80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p9bca700} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="shopping_cart">
      <Icon23 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="content-stretch flex items-center justify-center p-[9.8px] relative shrink-0" data-name="Icon">
      <ShoppingCart />
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.6px] items-center justify-center left-0 top-0" data-name="Button">
      <Icon24 />
    </div>
  );
}

function ActionPrimary() {
  return (
    <div className="overflow-clip relative shrink-0 size-[33.6px]" data-name="Action Primary">
      <Button22 />
    </div>
  );
}

function TrailingActions() {
  return (
    <div className="content-stretch flex h-[30.8px] items-center justify-end relative shrink-0" data-name="Trailing Actions">
      <ActionTertiary />
      <ActionSecondary />
      <ActionPrimary />
    </div>
  );
}

function NavigationHeader() {
  return (
    <div className="h-[30.8px] relative shrink-0 w-full" data-name="Navigation Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[11.2px] pr-[5.6px] py-0 relative size-full">
          <Address />
          <TrailingActions />
        </div>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[262.5px]" data-name="Page header">
      <StatusBar />
      <NavigationHeader />
    </div>
  );
}

function Divider8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Cell divider">
        <div className="absolute inset-[-0.7px_0_0_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 1">
            <line id="Cell divider" stroke="var(--stroke-0, #F3F3F3)" strokeWidth="0.7" x2="262.5" y1="0.35" y2="0.35" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_135288)" id="Icon">
          <path d={svgPaths.p3fa04700} fill="var(--fill-0, black)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_5_135288">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 overflow-clip size-[14px] top-0 translate-x-[-50%]" data-name="home">
      <Icon25 />
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon frame">
      <Home />
    </div>
  );
}

function Tab() {
  return (
    <div className="basis-0 bg-white grow h-[43.4px] min-h-px min-w-px relative shrink-0" data-name="Tab 1">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[1.4px] items-center justify-end px-[5.6px] py-[8.4px] relative size-full">
          <IconFrame1 />
          <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[11.2px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8.4px] text-black text-center text-nowrap w-[min-content]">Home</p>
        </div>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3b374980} fill="var(--fill-0, #5E5E5E)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function FruitApple() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 size-[14px] top-0 translate-x-[-50%]" data-name="fruit_apple">
      <Icon26 />
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon frame">
      <FruitApple />
    </div>
  );
}

function Tab1() {
  return (
    <div className="basis-0 bg-white grow h-[43.4px] min-h-px min-w-px relative shrink-0" data-name="Tab 2">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[1.4px] items-center justify-end px-[5.6px] py-[8.4px] relative size-full">
          <IconFrame2 />
          <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[11.2px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e5e5e] text-[8.4px] text-center text-nowrap w-[min-content]">Grocery</p>
        </div>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.pc41080} fill="var(--fill-0, #5E5E5E)" />
            <path d={svgPaths.p17d01880} fill="var(--fill-0, #5E5E5E)" />
            <path d={svgPaths.p12039a90} fill="var(--fill-0, #5E5E5E)" />
            <path d={svgPaths.p3482a080} fill="var(--fill-0, #5E5E5E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SearchBrowse() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 size-[14px] top-0 translate-x-[-50%]" data-name="search_browse">
      <Icon27 />
    </div>
  );
}

function IconFrame3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon frame">
      <SearchBrowse />
    </div>
  );
}

function Tab2() {
  return (
    <div className="basis-0 bg-white grow h-[43.4px] min-h-px min-w-px relative shrink-0" data-name="Tab 3">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[1.4px] items-center justify-end px-[5.6px] py-[8.4px] relative size-full">
          <IconFrame3 />
          <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[11.2px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e5e5e] text-[8.4px] text-center text-nowrap w-[min-content]">Explore</p>
        </div>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.p1c0d2a00} fill="var(--fill-0, #5E5E5E)" />
            <path d={svgPaths.p2c95d100} fill="var(--fill-0, #5E5E5E)" />
            <path clipRule="evenodd" d={svgPaths.p17246b00} fill="var(--fill-0, #5E5E5E)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Receipt() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 size-[14px] top-0 translate-x-[-50%]" data-name="receipt">
      <Icon28 />
    </div>
  );
}

function IconFrame4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon frame">
      <Receipt />
    </div>
  );
}

function Tab3() {
  return (
    <div className="basis-0 bg-white grow h-[43.4px] min-h-px min-w-px relative shrink-0" data-name="Tab 4">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[1.4px] items-center justify-end px-[5.6px] py-[8.4px] relative size-full">
          <IconFrame4 />
          <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[11.2px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e5e5e] text-[8.4px] text-center text-nowrap w-[min-content]">Orders</p>
        </div>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.p36d55000} fill="var(--fill-0, #5E5E5E)" />
            <path d={svgPaths.p2891600} fill="var(--fill-0, #5E5E5E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Person() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 size-[14px] top-0 translate-x-[-50%]" data-name="person">
      <Icon29 />
    </div>
  );
}

function IconFrame5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon frame">
      <Person />
    </div>
  );
}

function Tab4() {
  return (
    <div className="basis-0 bg-white grow h-[43.4px] min-h-px min-w-px relative shrink-0" data-name="Tab 5">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[1.4px] items-center justify-end px-[5.6px] py-[8.4px] relative size-full">
          <IconFrame5 />
          <p className="font-['Uber_Move_Text:Medium',sans-serif] leading-[11.2px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e5e5e] text-[8.4px] text-center text-nowrap w-[min-content]">Account</p>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full z-[2]" data-name="Tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
      <Tab4 />
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Bottom navigation">
      <Divider8 />
      <Tabs />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Home indicator">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[5.6px] pt-[14.7px] px-[84px] relative w-full">
          <div className="h-[3.5px] relative shrink-0 w-[93.8px]" data-name="Grabber">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 4">
                <path clipRule="evenodd" d={svgPaths.p17152260} fill="var(--fill-0, black)" fillRule="evenodd" id="Grabber" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="absolute bottom-[-208.7px] content-stretch flex flex-col items-start left-0 shadow-[0px_-2.8px_11.2px_0px_rgba(0,0,0,0.12)] w-[262.5px]" data-name="Bottom bar">
      <BottomNavigation />
      <HomeIndicator />
    </div>
  );
}

function Screen() {
  return (
    <div className="bg-white h-[388.5px] relative rounded-tl-[22.4px] rounded-tr-[22.4px] shrink-0 w-[262.5px]" data-name="Screen">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <BottomBar />
        <Feed />
        <PageHeader />
      </div>
      <div aria-hidden="true" className="absolute border-[8px_8px_0px] border-black border-solid inset-[-8px_-8px_0_-8px] pointer-events-none rounded-tl-[30.4px] rounded-tr-[30.4px]" />
    </div>
  );
}

function UnifiedPreview() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[480px] items-center overflow-clip px-[48px] py-0 relative rounded-[24px] shrink-0 w-[400px]" data-name="Unified Preview">
      <ButtonGroup1 />
      <Screen />
    </div>
  );
}

function Typography16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move:bold',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[20px] text-black tracking-[0.25px] w-[min-content]">{`US$1680 est. weekly sales* `}</p>
    </div>
  );
}

function Typography17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Based on stores running this campaign</p>
    </div>
  );
}

function TextFrame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-[64px] min-w-px overflow-clip px-0 py-[12px] relative shrink-0" data-name="Text frame">
      <Typography16 />
      <Typography17 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2eb02200} fill="var(--fill-0, #166C3B)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ArrowZigzagUp() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="arrow_zigzag_up">
      <Icon30 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-center justify-center p-[10px] relative rounded-[36px] shrink-0 size-[36px]" data-name="Icon">
      <ArrowZigzagUp />
    </div>
  );
}

function TextAction() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[6px] relative shrink-0" data-name="Text action">
      <Icon31 />
    </div>
  );
}

function ControlFrame6() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center px-[8px] py-[10px] relative shrink-0" data-name="Control frame">
      <TextAction />
    </div>
  );
}

function ContentFrame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content frame">
      <TextFrame7 />
      <div className="flex flex-row items-center self-stretch">
        <ControlFrame6 />
      </div>
    </div>
  );
}

function ContentCellDivider1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content + cell divider">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[8px] py-0 relative size-full">
          <ContentFrame6 />
        </div>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="List item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <ContentCellDivider1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Typography18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Est. campaign spend</p>
    </div>
  );
}

function ContentLeading6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content leading">
      <Typography18 />
    </div>
  );
}

function Typography19() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-right">US$419.65 / week</p>
    </div>
  );
}

function ContentTrailing() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative self-stretch shrink-0" data-name="Content trailing">
      <Typography19 />
    </div>
  );
}

function MainText6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Main text">
      <ContentLeading6 />
      <ContentTrailing />
    </div>
  );
}

function TextFrame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-[48px] min-w-px px-0 py-[8px] relative shrink-0" data-name="Text frame">
      <MainText6 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2847ba00} fill="var(--fill-0, #A6A6A6)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Chevron6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="chevron">
      <Icon32 />
    </div>
  );
}

function ControlFrame7() {
  return (
    <div className="content-stretch flex items-center min-h-[48px] min-w-[32px] px-0 py-[8px] relative shrink-0 w-[36px]" data-name="Control frame">
      <Chevron6 />
    </div>
  );
}

function ContentFrame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Content frame">
      <TextFrame8 />
      <ControlFrame7 />
    </div>
  );
}

function ContentCellDivider2() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="Content + cell divider">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between pl-[12px] pr-0 py-0 relative size-full">
          <ContentFrame7 />
        </div>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="List item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[8px] pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <ContentCellDivider2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-0 py-[4px] relative shrink-0 w-full">
      <ListItem2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white left-px rounded-[12px] top-px w-[388px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <ListItem1 />
        <div className="h-0 relative shrink-0 w-[348px]">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(134, 134, 134, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
              <line id="Line 1" opacity="0.7" stroke="var(--stroke-0, #868686)" strokeDasharray="4 4" x2="348" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function UnifiedExpectedResults() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[132px] items-center relative shrink-0" data-name="Unified Expected Results">
      <Frame8 />
      <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-center w-[390px]">*Your results may vary due to factors like demand, number of stores, and operating hours. Results aren’t guaranteed.</p>
    </div>
  );
}

function UnifiedRightRail() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col gap-[48px] h-[1155px] items-center overflow-clip px-0 py-[48px] relative shrink-0 w-[600px]" data-name="Unified Right Rail">
      <UnifiedPreview />
      <UnifiedExpectedResults />
    </div>
  );
}

export default function FullScreen() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[24px] size-full" data-name="Full screen">
      <LeftPanel />
      <UnifiedRightRail />
    </div>
  );
}