import svgPaths from "./svg-2h5ri18xnc";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[343px]" data-name="Heading">
      <p className="-webkit-box font-['Uber_Move_Text:medium',sans-serif] leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black w-[min-content]">Ad group name</p>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Section heading">
      <Heading />
    </div>
  );
}

function InputElementContentText() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Enter name</p>
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

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="name">
      <SectionHeading />
      <InputElementTextField />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[343px]" data-name="Heading">
      <p className="-webkit-box font-['Uber_Move_Text:medium',sans-serif] leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black w-[min-content]">Ad type</p>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[343px]" data-name="Sub heading">
      <p className="-webkit-box font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Pick which you want to use for your ads.</p>
    </div>
  );
}

function SectionHeading1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Section heading">
      <Heading1 />
      <SubHeading />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p35e77b00} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Artwork() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="Artwork">
      <Icon />
    </div>
  );
}

function ContentLeading() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Content leading">
      <Artwork />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">Edit</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Button">
      <Content />
      <div className="h-0 relative shrink-0 w-[52px]" data-name="Minimum width XSmall">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width XSmall"></g>
        </svg>
      </div>
    </div>
  );
}

function ContentTrailing() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Content trailing">
      <Button />
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content top">
      <ContentLeading />
      <ContentTrailing />
    </div>
  );
}

function LabelBottomContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label bottom container">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Journey</p>
    </div>
  );
}

function ParagraphBottomLine2Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph bottom line 2 container">
      <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Own the trip experience on Uber rides</p>
    </div>
  );
}

function ContentBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="Content bottom">
      <LabelBottomContainer />
      <ParagraphBottomLine2Container />
    </div>
  );
}

function Tile() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Tile">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end justify-center p-[16px] relative w-full">
          <ContentTop />
          <ContentBottom />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Tile />
    </div>
  );
}

function AdType() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="ad-type">
      <SectionHeading1 />
      <Frame1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Uber_Move_Text:medium',sans-serif] leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black w-[min-content]">Budget</p>
    </div>
  );
}

function SubHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub heading">
      <p className="-webkit-box font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Choose the maximum amount you’ll spend.</p>
    </div>
  );
}

function SectionHeading2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Section heading">
      <Heading2 />
      <SubHeading1 />
    </div>
  );
}

function Typography() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Amount</p>
    </div>
  );
}

function InputElementLabel() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p154d5f00} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadingArtwork() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Leading artwork">
      <Icon1 />
    </div>
  );
}

function LeadingArtworkContainer() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Leading artwork container">
      <LeadingArtwork />
    </div>
  );
}

function InputElementContentText1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">0</p>
        </div>
      </div>
    </div>
  );
}

function TrailingLabel() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Trailing label">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-right">USD</p>
    </div>
  );
}

function TrailingLabelEnhancer() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Trailing label enhancer">
      <TrailingLabel />
    </div>
  );
}

function InputElementSelect() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeadingArtworkContainer />
          <InputElementContentText1 />
          <TrailingLabelEnhancer />
        </div>
      </div>
    </div>
  );
}

function Amount() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="amount">
      <InputElementLabel />
      <InputElementSelect />
    </div>
  );
}

function InputElementContentText2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Lifetime</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pb1ded00} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="chevron_down">
      <Icon2 />
    </div>
  );
}

function TrailingArtworkContainer() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Trailing artwork container">
      <ChevronDown />
    </div>
  );
}

function InputElementSelect1() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText2 />
          <TrailingArtworkContainer />
        </div>
      </div>
    </div>
  );
}

function TimePeriod() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="time-period">
      <InputElementSelect1 />
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="amount">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Amount />
      </div>
      <TimePeriod />
    </div>
  );
}

function Typography1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Funding (optional)</p>
    </div>
  );
}

function InputElementLabel1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography1 />
      </div>
    </div>
  );
}

function InputElementContentText3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Select funding</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pb1ded00} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="chevron_down">
      <Icon3 />
    </div>
  );
}

function TrailingArtworkContainer1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Trailing artwork container">
      <ChevronDown1 />
    </div>
  );
}

function InputElementSelect2() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText3 />
          <TrailingArtworkContainer1 />
        </div>
      </div>
    </div>
  );
}

function Funding() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="funding">
      <InputElementLabel1 />
      <InputElementSelect2 />
    </div>
  );
}

function Budget() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="budget">
      <SectionHeading2 />
      <Amount1 />
      <Funding />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[343px]" data-name="Heading">
      <p className="-webkit-box font-['Uber_Move_Text:medium',sans-serif] leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black w-[min-content]">Buying method</p>
    </div>
  );
}

function SubHeading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[343px]" data-name="Sub heading">
      <p className="-webkit-box font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">This is how your budget will be spent.</p>
    </div>
  );
}

function SectionHeading3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Section heading">
      <Heading3 />
      <SubHeading2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24858900} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function RadioButtonUnselected() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="radio_button_unselected">
      <Icon4 />
    </div>
  );
}

function Radio() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative shrink-0 size-[48px]" data-name="Radio">
      <RadioButtonUnselected />
    </div>
  );
}

function StandardRadio() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[64px] min-w-[48px] relative shrink-0" data-name="Standard / Radio">
      <Radio />
    </div>
  );
}

function ArtworkFrame() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[64px] min-w-[48px] relative shrink-0" data-name="Artwork frame">
      <StandardRadio />
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[295px]" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Trips</p>
    </div>
  );
}

function Typography3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Aim to maximize trips your ads show on</p>
    </div>
  );
}

function TextFrame() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] pl-0 pr-[16px] py-[12px] relative w-full">
          <Typography2 />
          <Typography3 />
        </div>
      </div>
    </div>
  );
}

function ContentCellDivider() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content + cell divider">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between pl-[8px] pr-0 py-0 relative size-full">
          <TextFrame />
        </div>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List item">
      <ArtworkFrame />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentCellDivider />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24858900} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function RadioButtonUnselected1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="radio_button_unselected">
      <Icon5 />
    </div>
  );
}

function Radio1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative shrink-0 size-[48px]" data-name="Radio">
      <RadioButtonUnselected1 />
    </div>
  );
}

function StandardRadio1() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[64px] min-w-[48px] relative shrink-0" data-name="Standard / Radio">
      <Radio1 />
    </div>
  );
}

function ArtworkFrame1() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[64px] min-w-[48px] relative shrink-0" data-name="Artwork frame">
      <StandardRadio1 />
    </div>
  );
}

function Typography4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[295px]" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Share of voice</p>
    </div>
  );
}

function Typography5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Get priority over other ads for timely messages</p>
    </div>
  );
}

function TextFrame1() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Text frame">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center min-h-[inherit] pl-0 pr-[16px] py-[12px] relative w-full">
          <Typography4 />
          <Typography5 />
        </div>
      </div>
    </div>
  );
}

function ContentCellDivider1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content + cell divider">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between pl-[8px] pr-0 py-0 relative size-full">
          <TextFrame1 />
        </div>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List item">
      <ArtworkFrame1 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentCellDivider1 />
      </div>
    </div>
  );
}

function BuyingMethodProgressiveDisclosure() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[758px]" data-name="Buying Method - Progressive Disclosure">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function BuyingMethod() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="buying-method">
      <SectionHeading3 />
      <BuyingMethodProgressiveDisclosure />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Uber_Move_Text:medium',sans-serif] leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black w-[min-content]">Schedule</p>
    </div>
  );
}

function SubHeading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub heading">
      <p className="-webkit-box font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Campaigns start and end at 12 AM by default.</p>
    </div>
  );
}

function SectionHeading4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Section heading">
      <Heading4 />
      <SubHeading3 />
    </div>
  );
}

function Typography6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Start date</p>
    </div>
  );
}

function InputElementLabel2() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography6 />
      </div>
    </div>
  );
}

function InputElementContentText4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">04/01/2025</p>
        </div>
      </div>
    </div>
  );
}

function InputElementTextField1() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText4 />
        </div>
      </div>
    </div>
  );
}

function PreparationType() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Preparation Type">
      <InputElementLabel2 />
      <InputElementTextField1 />
    </div>
  );
}

function Typography7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">End date</p>
    </div>
  );
}

function InputElementLabel3() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography7 />
      </div>
    </div>
  );
}

function InputElementContentText5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">mm/dd/yyyy</p>
        </div>
      </div>
    </div>
  );
}

function InputElementTextField2() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText5 />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px overflow-clip relative self-stretch shrink-0" data-name="Text field">
      <InputElementLabel3 />
      <InputElementTextField2 />
    </div>
  );
}

function DateRange() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="date-range">
      <PreparationType />
      <TextField />
    </div>
  );
}

function Typography8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Time zone</p>
    </div>
  );
}

function InputElementLabel4() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography8 />
      </div>
    </div>
  );
}

function InputElementContentText6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap w-[min-content]">(GMT-8) America/Los Angeles</p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pb1ded00} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="chevron_down">
      <Icon6 />
    </div>
  );
}

function TrailingArtworkContainer2() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Trailing artwork container">
      <ChevronDown2 />
    </div>
  );
}

function InputElementSelect3() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText6 />
          <TrailingArtworkContainer2 />
        </div>
      </div>
    </div>
  );
}

function TimeZone() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="time-zone">
      <InputElementLabel4 />
      <InputElementSelect3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34a18880} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="chevron_down">
      <Icon7 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">Show dayparting</p>
      </div>
      <ChevronDown3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <Content1 />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <Button1 />
    </div>
  );
}

function AdvancedButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Advanced button">
      <Button2 />
    </div>
  );
}

function AdvancedOptions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Advanced options">
      <AdvancedButton />
    </div>
  );
}

function Schedule() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="schedule">
      <SectionHeading4 />
      <DateRange />
      <TimeZone />
      <AdvancedOptions />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Uber_Move_Text:medium',sans-serif] leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black w-[min-content]">Targeting</p>
    </div>
  );
}

function SubHeading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub heading">
      <p className="-webkit-box font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Define who will see your ads</p>
    </div>
  );
}

function SectionHeading5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full z-[6]" data-name="Section heading">
      <Heading5 />
      <SubHeading4 />
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px overflow-clip p-[16px] relative shrink-0" data-name="Content frame">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[16px]">New</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-end relative shrink-0" data-name="Tab">
      <ContentFrame />
      <div className="bg-black h-[4px] shrink-0 w-full" data-name="Highlight active" />
    </div>
  );
}

function ContentFrame1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px overflow-clip p-[16px] relative shrink-0" data-name="Content frame">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap">
        <p className="leading-[16px]">Saved</p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-end relative shrink-0" data-name="Tab">
      <ContentFrame1 />
      <div className="bg-[#f3f3f3] h-[4px] shrink-0 w-full" data-name="Highlight" />
    </div>
  );
}

function Extension() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[56px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Extension">
      <div className="bg-[#f3f3f3] h-[4px] shrink-0 w-full" data-name="Highlight" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full z-[5]" data-name="Tabs">
      <Tab />
      <Tab1 />
      <Extension />
    </div>
  );
}

function Typography9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Location</p>
    </div>
  );
}

function InputElementLabel5() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography9 />
      </div>
    </div>
  );
}

function InputElementContentText7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Include</p>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe946e80} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Chevron icon">
      <Icon8 />
    </div>
  );
}

function SelectIndicatorContainer() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Select indicator container">
      <ChevronIcon />
    </div>
  );
}

function InputElementSelect4() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText7 />
          <SelectIndicatorContainer />
        </div>
      </div>
    </div>
  );
}

function PreparationType1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[125px]" data-name="Preparation Type">
      <InputElementLabel5 />
      <InputElementSelect4 />
    </div>
  );
}

function InputElementContentText8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Select category</p>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe946e80} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronIcon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Chevron icon">
      <Icon9 />
    </div>
  );
}

function SelectIndicatorContainer1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Select indicator container">
      <ChevronIcon1 />
    </div>
  );
}

function InputElementSelect5() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText8 />
          <SelectIndicatorContainer1 />
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-[200px]" data-name="Select">
      <InputElementSelect5 />
    </div>
  );
}

function InputElementContentText9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Search or browse</p>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe946e80} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronIcon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Chevron icon">
      <Icon10 />
    </div>
  );
}

function SelectIndicatorContainer2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Select indicator container">
      <ChevronIcon2 />
    </div>
  );
}

function InputElementSelect6() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText9 />
          <SelectIndicatorContainer2 />
        </div>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Select">
      <InputElementSelect6 />
    </div>
  );
}

function LocationTargeting() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Location Targeting">
      <PreparationType1 />
      <Select />
      <Select1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">Narrow down</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <Content2 />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button3 />
    </div>
  );
}

function SaveButton() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Save button">
      <Button4 />
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full z-[4]" data-name="Location">
      <LocationTargeting />
      <SaveButton />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_9_157034)" id="Icon">
          <g id="Shape">
            <path d={svgPaths.p3965ce00} fill="var(--fill-0, #4B4B4B)" />
            <path d={svgPaths.p20bae200} fill="var(--fill-0, #4B4B4B)" />
            <path clipRule="evenodd" d={svgPaths.p12d6b700} fill="var(--fill-0, #4B4B4B)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_157034">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CircleI() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="circle_i">
      <Icon11 />
    </div>
  );
}

function AndLabel() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="AND Label">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap">AND</p>
      <CircleI />
    </div>
  );
}

function Icon12() {
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
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[12px]" data-name="x">
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[8px] shrink-0 size-[28px]" data-name="Icon">
      <X />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center opacity-0 relative shrink-0" data-name="Button">
      <Icon13 />
    </div>
  );
}

function LabelRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[758px] z-[3]" data-name="Label Row">
      <AndLabel />
      <Button5 />
    </div>
  );
}

function Typography10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Audience</p>
    </div>
  );
}

function InputElementLabel6() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography10 />
      </div>
    </div>
  );
}

function InputElementContentText10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Include</p>
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe946e80} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Chevron icon">
      <Icon14 />
    </div>
  );
}

function SelectIndicatorContainer3() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Select indicator container">
      <ChevronIcon3 />
    </div>
  );
}

function InputElementSelect7() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText10 />
          <SelectIndicatorContainer3 />
        </div>
      </div>
    </div>
  );
}

function PreparationType2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[125px]" data-name="Preparation Type">
      <InputElementLabel6 />
      <InputElementSelect7 />
    </div>
  );
}

function InputElementContentText11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Select category</p>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe946e80} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronIcon4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Chevron icon">
      <Icon15 />
    </div>
  );
}

function SelectIndicatorContainer4() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Select indicator container">
      <ChevronIcon4 />
    </div>
  );
}

function InputElementSelect8() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText11 />
          <SelectIndicatorContainer4 />
        </div>
      </div>
    </div>
  );
}

function Select2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-[200px]" data-name="Select">
      <InputElementSelect8 />
    </div>
  );
}

function InputElementContentText12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Search or browse</p>
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe946e80} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronIcon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Chevron icon">
      <Icon16 />
    </div>
  );
}

function SelectIndicatorContainer5() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Select indicator container">
      <ChevronIcon5 />
    </div>
  );
}

function InputElementSelect9() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText12 />
          <SelectIndicatorContainer5 />
        </div>
      </div>
    </div>
  );
}

function Select3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Select">
      <InputElementSelect9 />
    </div>
  );
}

function AudienceTargeting() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Audience Targeting">
      <PreparationType2 />
      <Select2 />
      <Select3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">Narrow down</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
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

function SaveButton1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Save button">
      <Button7 />
    </div>
  );
}

function Audience() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full z-[2]" data-name="Audience">
      <AudienceTargeting />
      <SaveButton1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[14px] text-center text-nowrap">
        <p className="leading-[16px]">Save targeting template</p>
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

function SaveButton2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full z-[1]" data-name="Save button">
      <Button9 />
    </div>
  );
}

function Targeting() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-full" data-name="targeting">
      <SectionHeading5 />
      <Tabs />
      <Location />
      <LabelRow />
      <Audience />
      <SaveButton2 />
    </div>
  );
}

function Typography11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Tier</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap">
        <p className="leading-[16px]">Internal</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Label />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f3f3f3] min-h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] px-[6px] py-[4px] relative w-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Tag">
      <Container />
    </div>
  );
}

function SectionHeading6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-name="Section heading">
      <Typography11 />
      <Tag />
    </div>
  );
}

function InputElementContentText13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Select tier</p>
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe946e80} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronIcon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Chevron icon">
      <Icon17 />
    </div>
  );
}

function SelectIndicatorContainer6() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Select indicator container">
      <ChevronIcon6 />
    </div>
  );
}

function InputElementSelect10() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText13 />
          <SelectIndicatorContainer6 />
        </div>
      </div>
    </div>
  );
}

function Tier() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="tier">
      <SectionHeading6 />
      <InputElementSelect10 />
    </div>
  );
}

function Typography12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[286px]" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Metadata</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap">
        <p className="leading-[16px]">Internal</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Label1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f3f3f3] min-h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] px-[6px] py-[4px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Tag">
      <Container1 />
    </div>
  );
}

function SectionHeading7() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Section heading">
      <Typography12 />
      <Tag1 />
    </div>
  );
}

function Typography13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Key</p>
    </div>
  );
}

function InputElementLabel7() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography13 />
      </div>
    </div>
  );
}

function InputElementContentText14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Enter key</p>
        </div>
      </div>
    </div>
  );
}

function InputElementTextField3() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText14 />
        </div>
      </div>
    </div>
  );
}

function PreparationType3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Preparation Type">
      <InputElementLabel7 />
      <InputElementTextField3 />
    </div>
  );
}

function Typography14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Value</p>
    </div>
  );
}

function InputElementLabel8() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography14 />
      </div>
    </div>
  );
}

function InputElementContentText15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Select value</p>
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe946e80} fill="var(--fill-0, #5E5E5E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronIcon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Chevron icon">
      <Icon18 />
    </div>
  );
}

function SelectIndicatorContainer7() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Select indicator container">
      <ChevronIcon7 />
    </div>
  );
}

function InputElementSelect11() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText15 />
          <SelectIndicatorContainer7 />
        </div>
      </div>
    </div>
  );
}

function Select4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Select">
      <InputElementLabel8 />
      <InputElementSelect11 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33f45500} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function X1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="x">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Icon">
      <X1 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Button">
      <Icon20 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-[758px]">
      <PreparationType3 />
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Select4 />
      </div>
      <Button10 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb738c00} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function PlusSmall() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="plus_small">
      <Icon21 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Content">
      <PlusSmall />
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[16px]">Add</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <Content7 />
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Minimum width Small">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Minimum width Small"></g>
        </svg>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame />
      <Button12 />
    </div>
  );
}

function Metadata() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="metadata">
      <SectionHeading7 />
      <Frame2 />
    </div>
  );
}

function Typography15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="-webkit-box font-['Uber_Move_Text:medium',sans-serif] leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black w-[min-content]">Reference number</p>
    </div>
  );
}

function SubHeading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub heading">
      <p className="-webkit-box font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Add an internal reference to track this campaign.</p>
    </div>
  );
}

function LeadingContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Leading content">
      <Typography15 />
      <SubHeading5 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Uber_Move_Text:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap">
        <p className="leading-[16px]">Internal</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Label2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f3f3f3] min-h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] px-[6px] py-[4px] relative w-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Tag">
      <Container2 />
    </div>
  );
}

function TrailingContent() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end justify-center relative shrink-0" data-name="Trailing content">
      <Tag2 />
    </div>
  );
}

function SectionHeading8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-[758px]" data-name="Section heading">
      <LeadingContent />
      <TrailingContent />
    </div>
  );
}

function Typography16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Quote line summary ID</p>
    </div>
  );
}

function InputElementLabel9() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography16 />
      </div>
    </div>
  );
}

function InputElementContentText16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Enter ID</p>
        </div>
      </div>
    </div>
  );
}

function InputElementSelect12() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText16 />
        </div>
      </div>
    </div>
  );
}

function PreparationType4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Preparation Type">
      <InputElementLabel9 />
      <InputElementSelect12 />
    </div>
  );
}

function Typography17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Revision quote line summary ID</p>
    </div>
  );
}

function InputElementLabel10() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography17 />
      </div>
    </div>
  );
}

function InputElementContentText17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Enter ID</p>
        </div>
      </div>
    </div>
  );
}

function InputElementSelect13() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText17 />
        </div>
      </div>
    </div>
  );
}

function PreparationType5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Preparation Type">
      <InputElementLabel10 />
      <InputElementSelect13 />
    </div>
  );
}

function Typography18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Typography">
      <p className="font-['Uber_Move_Text:medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Quote line ID</p>
    </div>
  );
}

function InputElementLabel11() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Input element / Label">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Typography18 />
      </div>
    </div>
  );
}

function InputElementContentText18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Input element / Content / Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Uber_Move_Text:regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#5e5e5e] text-[14px] w-[min-content]">Enter ID</p>
        </div>
      </div>
    </div>
  );
}

function InputElementSelect14() {
  return (
    <div className="bg-[#f3f3f3] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input element / Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <InputElementContentText18 />
        </div>
      </div>
    </div>
  );
}

function Select5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Select">
      <InputElementLabel11 />
      <InputElementSelect14 />
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="name">
      <SectionHeading8 />
      <PreparationType4 />
      <PreparationType5 />
      <Select5 />
    </div>
  );
}

export default function AdgroupFormContent() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="adgroup-form-content">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-[40px] pt-[24px] px-[24px] relative size-full">
          <Name />
          <AdType />
          <Budget />
          <BuyingMethod />
          <Schedule />
          <Targeting />
          <Tier />
          <Metadata />
          <Name1 />
        </div>
      </div>
    </div>
  );
}