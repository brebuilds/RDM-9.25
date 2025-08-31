import svgPaths from "./svg-dpkmxfbgq5";
import imgSection from "../images/red-door-background.png";
import imgLink from "../images/phoenix-area.png";
import imgLink1 from "../images/property-management.png";
import imgLink2 from "../images/construction-repositioning.png";
import imgReddoorlogo2Png from "../images/red-door-text-logo.png";
import imgReddoortextCopy291E7C951920WPng from "../images/red-door-footer-logo.png";

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[362.14px] pr-[362.16px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[50px] text-center w-full">
            <p className="leading-[normal]">Vacation Rentals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1142.41px] min-h-2.5 min-w-2.5 relative shrink-0 w-[1142.41px]" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[2.7px] pr-[2.72px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-center w-full">
            <p className="mb-0">We provide a wide range of professional services to meet your needs.</p>
            <p className="mb-0">We promise to provide every service with a smile and to your highest</p>
            <p>level of satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1142.41px] min-h-2.5 min-w-2.5 relative shrink-0 w-[683.72px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[25px] grow h-[158px] items-center justify-center max-w-[1200px] min-h-2 min-w-12 relative shrink-0" data-name="Container">
      <Container1 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1200px] min-h-[278px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit min-h-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start max-w-inherit min-h-inherit px-[28.797px] py-36 relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-left bg-no-repeat bg-size-[100%_168.7%] relative shrink-0 w-full" data-name="Section" style={{ backgroundImage: `url('${imgSection}')` }}>
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[120px] py-0 relative w-full">
          <div className="absolute bg-[#000000] inset-0 opacity-30" data-name="Background" />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="bg-left bg-no-repeat bg-size-[100%_100.28%] h-[308px] shrink-0 w-full" data-name="Link" style={{ backgroundImage: `url('${imgLink}')` }} />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start max-w-[411.72px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c393f] text-[24px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Furnished Rentals</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Kumbh_Sans:Regular',_sans-serif] font-normal items-center justify-center leading-[0] max-w-[138.18px] pl-[38.18px] pr-[38.16px] py-2.5 relative shrink-0 text-[#ab0000] text-[16px] text-center text-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'YOPQ' 300" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre">View</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'YOPQ' 300" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre">Projects</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[62px] items-center justify-center max-w-[411.72px] pl-[2.32px] pr-[2.46px] py-px relative rounded-[50px] shrink-0 w-[141px]" data-name="Component 1">
      <div aria-hidden="true" className="absolute border border-[#ab0000] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Paragraph />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="box-border content-stretch flex flex-col h-[82px] items-start justify-start max-w-[411.72px] px-0 py-2.5 relative shrink-0 w-[141px]" data-name="Link:margin">
      <Component1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Heading3 />
          <LinkMargin />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[141px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container9 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Component 2">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Component2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="bg-left bg-no-repeat bg-size-[100%_100.28%] h-[308px] shrink-0 w-full" data-name="Link" style={{ backgroundImage: `url('${imgLink1}')` }} />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start max-w-[411.72px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c393f] text-[24px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Hillside Luxury Airbnb</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="max-w-[138.18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col items-center justify-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col font-['Kumbh_Sans:Regular',_sans-serif] font-normal items-center justify-center leading-[0] max-w-inherit pl-[35px] pr-[35.02px] py-2.5 relative text-[#ab0000] text-[16px] text-center text-nowrap w-full">
          <div className="flex flex-col justify-center relative shrink-0" role="link" style={{ fontVariationSettings: "'YOPQ' 300" }} tabIndex="0">
            <p className="cursor-pointer leading-[normal] text-nowrap whitespace-pre">View</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" role="link" style={{ fontVariationSettings: "'YOPQ' 300" }} tabIndex="0">
            <p className="cursor-pointer leading-[normal] text-nowrap whitespace-pre">Property</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <a className="box-border content-stretch cursor-pointer flex flex-col h-[62px] items-center justify-center max-w-[411.72px] overflow-visible pl-[2.32px] pr-[2.46px] py-px relative rounded-[50px] shrink-0 w-[141px]" data-name="Component 1" href="https://www.rdm-az.com/hillside---project-info">
      <div aria-hidden="true" className="absolute border border-[#ab0000] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Paragraph1 />
    </a>
  );
}

function LinkMargin1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[82px] items-start justify-start max-w-[411.72px] px-0 py-2.5 relative shrink-0 w-[141px]" data-name="Link:margin">
      <Component8 />
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Heading4 />
          <LinkMargin1 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[141px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Component 2">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Component9 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="bg-no-repeat bg-size-[104.08%_100%] bg-top h-[308px] shrink-0 w-full" data-name="Link" style={{ backgroundImage: `url('${imgLink2}')` }} />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start max-w-[411.72px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c393f] text-[24px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Ocean Isle Beach House</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="max-w-[138.18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col items-center justify-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col font-['Kumbh_Sans:Regular',_sans-serif] font-normal items-center justify-center leading-[0] max-w-inherit pl-[35px] pr-[35.02px] py-2.5 relative text-[#ab0000] text-[0px] text-center text-nowrap w-full">
          <div className="flex flex-col justify-center relative shrink-0" role="link" style={{ fontVariationSettings: "'YOPQ' 300" }} tabIndex="0">
            <p className="cursor-pointer leading-[normal] text-[16px] text-nowrap whitespace-pre" role="link" style={{ fontVariationSettings: "'YOPQ' 300" }} tabIndex="0">
              View
            </p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" role="link" style={{ fontVariationSettings: "'YOPQ' 300" }} tabIndex="0">
            <p className="cursor-pointer font-['Kumbh_Sans:Regular',_sans-serif] font-normal leading-[normal] text-[16px] text-nowrap whitespace-pre" role="link" style={{ fontVariationSettings: "'YOPQ' 300" }} tabIndex="0">
              Property
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <a className="box-border content-stretch cursor-pointer flex flex-col h-[62px] items-center justify-center max-w-[411.72px] overflow-visible pl-[2.33px] pr-[2.45px] py-px relative rounded-[50px] shrink-0 w-[141px]" data-name="Component 1" href="https://www.rdm-az.com/oib---project-info">
      <div aria-hidden="true" className="absolute border border-[#ab0000] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Paragraph2 />
    </a>
  );
}

function LinkMargin2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[82px] items-start justify-start max-w-[411.72px] px-0 py-2.5 relative shrink-0 w-[141px]" data-name="Link:margin">
      <Component10 />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Heading5 />
          <LinkMargin2 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[141px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Component 2">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Component11 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container16 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1267.22px] min-h-2.5 min-w-2.5 relative shrink-0 w-[1235.2px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="basis-0 grow h-[481px] max-w-[1440px] min-h-2 min-w-[57.6px] relative shrink-0" data-name="Container">
      <div className="flex flex-col items-end max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-[481px] items-end justify-start max-w-inherit min-h-inherit min-w-inherit p-[16px] relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="min-h-[520px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center min-h-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start min-h-inherit pb-[115.188px] pt-0 px-[86.391px] relative w-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#000000] content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Section">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[442.38px] pr-[442.37px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center w-[325px]">
            <p className="leading-[normal]">What People Say About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center max-w-[1142.41px] min-h-2.5 min-w-2.5 translate-x-[-50%] translate-y-[-50%] w-[1096.72px]" data-name="Container" style={{ top: "calc(50% - 74px)", left: "calc(50% - 0.003px)" }}>
      <Container28 />
    </div>
  );
}

function Container30() {
  return <div className="absolute h-[22px] max-w-[1142.41px] min-h-2.5 min-w-2.5 translate-x-[-50%] translate-y-[-50%] w-[1096.72px]" data-name="Container" style={{ top: "calc(50% + 72.5px)", left: "calc(50% - 0.003px)" }} />;
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[18.39px] pr-[18.41px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#ffffff] text-[32px] text-center w-full">
            <p className="mb-0">“Amazing service. Can’t wait to find out</p>
            <p>what’s next!”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Heading6 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center max-w-[1142.41px] min-h-2.5 min-w-2.5 translate-x-[-50%] translate-y-[-50%] w-[842px]" data-name="Container" style={{ top: "calc(50% - 0.065px)", left: "calc(50% + 0.388px)" }}>
      <Container31 />
    </div>
  );
}

function Background() {
  return (
    <div className="basis-0 bg-[#000000] grow h-[327px] max-w-[1200px] min-h-2 min-w-12 relative rounded-[17px] shrink-0" data-name="Background">
      <Container29 />
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="max-w-[1200px] min-h-[389px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit min-h-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start max-w-inherit min-h-inherit px-[28.797px] py-[57.594px] relative w-full">
          <Background />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Section">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[120px] py-0 relative w-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[439.75px] pr-[439.77px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-center w-[597px]">
            <p className="leading-[normal]">Contact us any time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1200px] min-h-2.5 min-w-2.5 relative shrink-0 w-[1200px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] w-full">
        <p className="leading-[normal]">Full Name</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3px] items-start justify-start left-0 pb-[3px] pt-0 px-[15px] right-[420px] top-[35px]" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] w-full">
        <p className="leading-[normal]">Email Address</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3px] items-start justify-start left-[420px] pb-[3px] pt-0 px-[15px] right-0 top-[35px]" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] w-full">
        <p className="leading-[normal]">Phone Number</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3px] items-start justify-start left-0 pb-[3px] pt-0 px-[15px] right-0 top-[109px]" data-name="Container">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] w-full">
        <p className="leading-[normal]">Your Message</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3px] items-start justify-start left-0 pb-[3px] pt-0 px-[15px] right-0 top-[183px]" data-name="Container">
      <Label3 />
      <Input3 />
    </div>
  );
}

function Input4() {
  return (
    <div className="box-border content-stretch flex items-start justify-center overflow-clip px-[73.22px] py-2.5 relative rounded-[5px] shrink-0 w-[252.83px]" data-name="Input">
      <div className="flex flex-col font-['Kumbh_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'YOPQ' 300" }}>
        <p className="leading-[normal] whitespace-pre">Send Message</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-[#ab0000] box-border content-stretch flex flex-col items-center justify-center left-1/2 max-w-[840px] pl-[25.58px] pr-[21.59px] py-px rounded-[50px] top-[277px] translate-x-[-50%] w-[300px]" data-name="Component 3">
      <div aria-hidden="true" className="absolute border border-[#ab0000] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Input4 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[354px] max-w-[1200px] relative shrink-0 w-[840px]" data-name="Form">
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Component3 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Form />
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1200px] min-h-2.5 min-w-2.5 relative shrink-0 w-[840px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-6 grow h-[417px] items-center justify-center max-w-[1200px] min-h-2 min-w-12 relative shrink-0" data-name="Container">
      <Container35 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="box-border content-stretch flex items-center justify-start max-w-[1200px] min-h-[460px] px-0 py-[57.594px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Section">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[120px] py-0 relative w-full">
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-0 right-0 top-[144.84px]" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[18.92px] pr-[18.94px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:Italic',_sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[28px] text-center tracking-[5.6px] w-full">
            <p className="leading-[normal]">STRATEGIC MANAGEMENT FOR OPTIMAL RETURNS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Heading7 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1113.63px] min-h-2.5 min-w-2.5 relative shrink-0 w-[990.56px]" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow h-[174px] max-w-[1200px] min-h-2 min-w-12 relative shrink-0" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-[174px] items-center justify-center max-w-inherit min-h-inherit min-w-inherit pl-[61.53px] pr-[61.54px] py-[70px] relative w-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="max-w-[1200px] min-h-[174px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit min-h-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start max-w-inherit min-h-inherit px-[43.188px] py-0 relative w-full">
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#890000] relative shrink-0 w-full" data-name="Section">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[120px] py-0 relative w-full">
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Reddoorlogo2Png() {
  return <div className="basis-0 bg-no-repeat bg-size-[100%_100%] bg-top-left grow max-w-[117px] min-h-px min-w-px shrink-0 w-full" data-name="REDDOORLOGO2.png" style={{ backgroundImage: `url('${imgReddoorlogo2Png}')` }} />;
}

function Container50() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Reddoorlogo2Png />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[354.81px] min-h-2.5 min-w-2.5 relative shrink-0 w-[117px]" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="box-border content-stretch flex flex-col h-[100px] items-center justify-center max-w-[1440px] min-h-2 min-w-[57.6px] pl-0 pr-[237.81px] py-[11px] relative shrink-0 w-[354.81px]" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[3.79px] pt-[4.8px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[14px] whitespace-pre">Home</p>
      </a>
    </div>
  );
}

function Component4() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-3 py-0 relative shrink-0" data-name="Component 4">
      <Container53 />
    </div>
  );
}

function Menuitem() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component4 />
    </div>
  );
}

function Container54() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[3.79px] pt-[4.8px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[14px] whitespace-pre">About Us</p>
      </a>
    </div>
  );
}

function Component12() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-3 py-0 relative shrink-0" data-name="Component 4">
      <Container54 />
    </div>
  );
}

function Menuitem1() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component12 />
    </div>
  );
}

function Container55() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[3.79px] pt-[4.8px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[14px] whitespace-pre">Services</p>
      </a>
    </div>
  );
}

function Component13() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-3 py-0 relative shrink-0" data-name="Component 4">
      <Container55 />
    </div>
  );
}

function Menuitem2() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component13 />
    </div>
  );
}

function Container56() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[3.79px] pt-[4.8px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[14px] whitespace-pre">Contact</p>
      </a>
    </div>
  );
}

function Component14() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-3 py-0 relative shrink-0" data-name="Component 4">
      <Container56 />
    </div>
  );
}

function Menuitem3() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component14 />
    </div>
  );
}

function Container57() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[3.79px] pt-[4.8px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[14px] whitespace-pre">Multifamily Rentals</p>
      </a>
    </div>
  );
}

function Component15() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-3 py-0 relative shrink-0" data-name="Component 4">
      <Container57 />
    </div>
  );
}

function Menuitem4() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component15 />
    </div>
  );
}

function Menubar() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Menubar">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-wrap gap-0 items-start justify-center px-[91.69px] py-0 relative size-full">
          <Menuitem />
          <Menuitem1 />
          <Menuitem2 />
          <Menuitem3 />
          <Menuitem4 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Navigation">
      <Menubar />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[678.27px] min-h-2.5 min-w-2.5 relative shrink-0 w-[678.27px]" data-name="Container">
      <Navigation />
    </div>
  );
}

function Container59() {
  return (
    <div className="box-border content-stretch flex flex-col h-[100px] items-center justify-center max-w-[1440px] min-h-2 min-w-[57.6px] pb-[36.71px] pt-[36.7px] px-0 relative shrink-0 w-[678.27px]" data-name="Container">
      <Container58 />
    </div>
  );
}

function Component5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[50px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pl-[46.85px] pr-[47.07px] py-4 relative size-full">
          <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center w-full">
            <p className="leading-[normal]">602-432-1380</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col h-[50px] items-start justify-center max-w-[349.19px] min-h-2.5 min-w-2.5 relative shrink-0 w-[186px]" data-name="Container">
      <Component5 />
    </div>
  );
}

function Container61() {
  return (
    <div className="box-border content-stretch flex h-[100px] items-center justify-start max-w-[1440px] min-h-2 min-w-[57.6px] px-0 py-[25px] relative shrink-0 w-[349.19px]" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="min-h-[100px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center min-h-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start min-h-inherit px-[28.797px] py-0 relative w-full">
          <Container52 />
          <Container59 />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-[#181818] content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Section">
      <Container62 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#ffffff] content-stretch flex flex-col items-start justify-start left-0 right-0 top-[2161.41px]" data-name="Background">
      <Section4 />
      <Section5 />
    </div>
  );
}

function ReddoortextCopy291E7C951920WPng() {
  return <div className="basis-0 bg-[0%_49.99%] bg-no-repeat bg-size-[100%_100.01%] grow max-w-[392px] min-h-px min-w-px shrink-0 w-full" data-name="reddoortext+copy-291e7c95-1920w.png" style={{ backgroundImage: `url('${imgReddoortextCopy291E7C951920WPng}')` }} />;
}

function Container63() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <ReddoortextCopy291E7C951920WPng />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[441.59px] min-h-2.5 min-w-2.5 relative shrink-0 w-[392px]" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute box-border content-stretch flex h-[75.08px] items-center justify-center left-[34.67%] max-w-[1440px] min-h-2 min-w-[57.6px] pl-[24.79px] pr-[24.8px] py-1.5 right-[34.67%] top-1/2 translate-y-[-50%]" data-name="Container">
      <Container64 />
    </div>
  );
}

function Component16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[50px] shrink-0 w-full" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#ab0000] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pl-[93.41px] pr-[93.54px] py-[11px] relative size-full">
          <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 w-full">
            <p className="leading-[normal] text-[16px]">480.501.1515</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[441.59px] min-h-2.5 min-w-2.5 relative shrink-0 w-[280px]" data-name="Container">
      <Component16 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute box-border content-stretch flex h-[75.08px] items-center justify-start left-[4%] max-w-[1440px] min-h-2 min-w-[57.6px] pb-[17.05px] pt-[17.03px] px-4 right-[65.33%] top-1/2 translate-y-[-50%]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Component6() {
  return (
    <div className="h-[30px] relative w-5" data-name="Component 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 30">
        <g id="Component 5">
          <path d={svgPaths.pc586380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component6 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[5px] py-0 relative shrink-0 size-[30px]" data-name="Container">
      <Container68 />
    </div>
  );
}

function LinkEmail() {
  return (
    <a className="box-border content-stretch flex flex-col items-start justify-start overflow-visible p-0 relative self-stretch shrink-0" data-name="Link - email" href="mailto:walter@familycfo.net">
      <Container69 />
    </a>
  );
}

function Component17() {
  return (
    <div className="h-[30px] relative w-5" data-name="Component 6">
      <div className="absolute bottom-0 left-[-0.29%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 30">
          <g id="Component 5">
            <path d={svgPaths.p4f8280} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component17 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[5px] py-0 relative shrink-0 size-[30px]" data-name="Container">
      <Container70 />
    </div>
  );
}

function LinkWhatsapp() {
  return (
    <a className="box-border content-stretch flex flex-col items-start justify-start overflow-visible p-0 relative self-stretch shrink-0" data-name="Link - whatsapp" href="https://web.whatsapp.com/send">
      <Container71 />
    </a>
  );
}

function Container72() {
  return (
    <div className="content-stretch cursor-pointer flex flex-wrap gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <LinkEmail />
      <LinkWhatsapp />
    </div>
  );
}

function Container73() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[441.59px] min-h-2.5 min-w-2.5 relative shrink-0" data-name="Container">
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute box-border content-stretch flex h-[75.08px] items-center justify-end left-[65.33%] max-w-[1440px] min-h-2 min-w-[57.6px] pb-[20.05px] pt-[20.03px] px-4 right-[4%] top-1/2 translate-y-[-50%]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Section6() {
  return (
    <div className="h-[75.08px] relative shrink-0 w-full" data-name="Section">
      <Container65 />
      <Container67 />
      <Container75 />
    </div>
  );
}

function Container76() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[16px] whitespace-pre">Home</p>
      </a>
    </div>
  );
}

function Component7() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0" data-name="Component 7">
      <Container76 />
    </div>
  );
}

function Menuitem5() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component7 />
    </div>
  );
}

function Container77() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[16px] whitespace-pre">About Us</p>
      </a>
    </div>
  );
}

function Component18() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0" data-name="Component 7">
      <Container77 />
    </div>
  );
}

function Menuitem6() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component18 />
    </div>
  );
}

function Container78() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[16px] whitespace-pre">Services</p>
      </a>
    </div>
  );
}

function Component19() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0" data-name="Component 7">
      <Container78 />
    </div>
  );
}

function Menuitem7() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component19 />
    </div>
  );
}

function Container79() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[16px] whitespace-pre">Contact</p>
      </a>
    </div>
  );
}

function Component20() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0" data-name="Component 7">
      <Container79 />
    </div>
  );
}

function Menuitem8() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component20 />
    </div>
  );
}

function Container80() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0" data-name="Container">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]" href="https://www.rdm-az.com/">
        <p className="cursor-pointer leading-[normal] text-[16px] whitespace-pre">Multifamily Rentals</p>
      </a>
    </div>
  );
}

function Component21() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0" data-name="Component 7">
      <Container80 />
    </div>
  );
}

function Menuitem9() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component21 />
    </div>
  );
}

function Container81() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3.18px] items-start justify-start pb-[0.01px] pt-[5.19px] px-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]">
        <p className="leading-[normal] text-[16px] whitespace-pre">Vacation Rentals</p>
      </div>
      <div className="h-px relative shrink-0 w-[141.48px]" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Component22() {
  return (
    <a className="box-border content-stretch cursor-pointer flex h-full items-center justify-start overflow-visible px-[15px] py-0 relative shrink-0" data-name="Component 7" href="https://www.rdm-az.com/landing-page">
      <Container81 />
    </a>
  );
}

function Menuitem10() {
  return (
    <div className="content-stretch flex h-full items-start justify-start relative shrink-0" data-name="Menuitem">
      <Component22 />
    </div>
  );
}

function Menubar1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Menubar">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-wrap gap-0 items-start justify-center pl-[180.22px] pr-[180.25px] py-0 relative size-full">
          <Menuitem5 />
          <Menuitem6 />
          <Menuitem7 />
          <Menuitem8 />
          <Menuitem9 />
          <Menuitem10 />
        </div>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Navigation">
      <Menubar1 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1142.41px] min-h-2.5 min-w-2.5 relative shrink-0 w-[1110.41px]" data-name="Container">
      <Navigation1 />
    </div>
  );
}

function Container83() {
  return (
    <div className="basis-0 grow h-[32.38px] max-w-[1200px] min-h-2 min-w-12 relative shrink-0" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-[32.38px] items-center justify-center max-w-inherit min-h-inherit min-w-inherit px-4 py-0.5 relative w-full">
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start max-w-inherit pb-1.5 pt-4 px-[28.797px] relative w-full">
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#c0c4c9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-[120px] relative w-full">
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#181818] box-border content-stretch flex flex-col items-start justify-start pb-[14.391px] pointer-events-auto pt-0 px-0 sticky top-0" data-name="Background">
      <Section6 />
      <Section7 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[2435.41px] relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Background1 />
      <div className="absolute inset-0 pointer-events-none">
        <Background2 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Background">
      <Container85 />
    </div>
  );
}

export default function Component1440WLight() {
  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col items-start justify-start relative size-full" data-name="1440w light">
      <Background3 />
    </div>
  );
}