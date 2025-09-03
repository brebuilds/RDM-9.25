import svgPaths from "./svg-a2v39wulg7";
import imgLink from "../images/phoenix-area.png";
import imgLink1 from "../images/property-management.png";
import imgLink2 from "../images/red-door-background.png";
import imgLink3 from "../images/construction-repositioning.png";
import imgLink4 from "../images/design-implementation.png";
import imgLink5 from "../images/rentals-short-long-term.png";
import imgLink6 from "../images/acquisition-disposition.png";
import imgLink7 from "../images/investment-analysis.png";
import imgReddoorlogo2Png from "../images/red-door-text-logo.png";
import imgReddoortextCopy291E7C951920WPng from "../images/red-door-logo.png";

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[397.54px] pr-[397.56px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ab0000] text-[20px] text-center tracking-[4px] w-full">
            <p className="block leading-[normal]">RED DOOR MANAGEMENT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[1142.41px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[92.36px] pr-[92.38px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[70px] text-center tracking-[11.9px] w-full">
            <p className="block leading-[normal]">Multi-Family Rentals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading1 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[1142.41px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow h-[134px] items-start justify-center max-w-[1200px] min-h-2 min-w-12 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start max-w-inherit pb-0 pt-[100px] px-[28.797px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div
      className="bg-[#000000] relative shrink-0 w-full"
      data-name="Section"
      style={{ marginBottom: "-2.84217e-14px" }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[120px] py-0 relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[15.53px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-no-repeat bg-size-[127.29%_100%] bg-top h-[450px] shrink-0 w-full"
        data-name="Link"
        style={{ backgroundImage: `url('${imgLink}')` }}
      />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container7 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[5px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component2 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[15.53px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-no-repeat bg-size-[102.46%_100%] bg-top h-[450px] shrink-0 w-full"
        data-name="Link"
        style={{ backgroundImage: `url('${imgLink1}')` }}
      />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container10 />
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[5px] relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component7 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container9 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[15.53px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-no-repeat bg-size-[115.38%_100%] bg-top h-[450px] shrink-0 w-full"
        data-name="Link"
        style={{ backgroundImage: `url('${imgLink2}')` }}
      />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container14 />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[5px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component8 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[15.53px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-left bg-no-repeat bg-size-[100%_173.33%] h-[450px] shrink-0 w-full"
        data-name="Link"
        style={{ backgroundImage: `url('${imgLink3}')` }}
      />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container17 />
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[5px] relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component9 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[15.53px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-no-repeat bg-size-[189.35%_100%] bg-top h-[450px] shrink-0 w-full"
        data-name="Link"
        style={{ backgroundImage: `url('${imgLink4}')` }}
      />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container21 />
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[5px] relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component10 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[15.53px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-no-repeat bg-size-[156.79%_100%] bg-top h-[450px] shrink-0 w-full"
        data-name="Link"
        style={{ backgroundImage: `url('${imgLink5}')` }}
      />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container24 />
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[5px] relative w-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component11 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container23 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[15.53px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-no-repeat bg-size-[132.25%_100%] bg-top h-[450px] shrink-0 w-full"
        data-name="Link"
        style={{ backgroundImage: `url('${imgLink6}')` }}
      />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container28 />
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[5px] relative w-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component12 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[15.53px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-no-repeat bg-size-[232.22%_100%] bg-top h-[450px] shrink-0 w-full"
        data-name="Link"
        style={{ backgroundImage: `url('${imgLink7}')` }}
      />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container31 />
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[5px] relative w-full">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component13 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container30 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[5px] relative w-full">
          <Container13 />
          <Container20 />
          <Container27 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center max-w-[1200px] min-h-2.5 min-w-2.5 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-start max-w-[1200px] min-h-[460px] pb-[100px] pt-[57.594px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container37 />
    </div>
  );
}

function Section1() {
  return (
    <div
      className="bg-[#000000] relative shrink-0 w-full"
      data-name="Section"
      style={{ marginBottom: "-2.84217e-14px" }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[120px] py-0 relative w-full">
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[144.84px]"
      data-name="Container"
    >
      <Section />
      <Section1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[18.92px] pr-[18.94px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:Italic',_sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[28px] text-center tracking-[5.6px] w-full">
            <p className="block leading-[normal]">STRATEGIC MANAGEMENT FOR OPTIMAL RETURNS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading2 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[1113.63px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-[990.56px]"
      data-name="Container"
    >
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="basis-0 grow h-[174px] max-w-[1200px] min-h-2 min-w-12 relative shrink-0" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-[174px] items-center justify-center max-w-inherit min-h-inherit min-w-inherit pl-[61.53px] pr-[61.54px] py-[70px] relative w-full">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="max-w-[1200px] min-h-[174px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit min-h-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start max-w-inherit min-h-inherit px-[43.188px] py-0 relative w-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#890000] relative shrink-0 w-full" data-name="Section">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[120px] py-0 relative w-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Reddoorlogo2Png() {
  return (
    <div
      className="basis-0 bg-no-repeat bg-size-[100%_100%] bg-top-left grow max-w-[117px] min-h-px min-w-px shrink-0 w-full"
      data-name="REDDOORLOGO2.png"
      style={{ backgroundImage: `url('${imgReddoorlogo2Png}')` }}
    />
  );
}

function Container44() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Reddoorlogo2Png />
    </div>
  );
}

function Container45() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[100px] items-center justify-center max-w-[1440px] min-h-2 min-w-[57.6px] pl-0 pr-[237.81px] py-[11px] relative shrink-0 w-[354.81px]"
      data-name="Container"
    >
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.79px] pt-[4.8px] px-0 relative shrink-0"
      data-name="Container"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]"
        href="https://www.rdm-az.com/"
      >
        <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-[14px] whitespace-pre">Home</p>
      </a>
    </div>
  );
}

function Component3() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-start px-3 py-0 relative shrink-0"
      data-name="Component 3"
    >
      <Container46 />
    </div>
  );
}

function Menuitem() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component3 />
    </div>
  );
}

function Container48() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.79px] pt-[4.8px] px-0 relative shrink-0"
      data-name="Container"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]"
        href="https://www.rdm-az.com/"
      >
        <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-[14px] whitespace-pre">About Us</p>
      </a>
    </div>
  );
}

function Component14() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-start px-3 py-0 relative shrink-0"
      data-name="Component 3"
    >
      <Container48 />
    </div>
  );
}

function Menuitem1() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component14 />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.79px] pt-[4.8px] px-0 relative shrink-0"
      data-name="Container"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]"
        href="https://www.rdm-az.com/"
      >
        <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-[14px] whitespace-pre">Services</p>
      </a>
    </div>
  );
}

function Component15() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-start px-3 py-0 relative shrink-0"
      data-name="Component 3"
    >
      <Container49 />
    </div>
  );
}

function Menuitem2() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component15 />
    </div>
  );
}

function Container50() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.79px] pt-[4.8px] px-0 relative shrink-0"
      data-name="Container"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]"
        href="https://www.rdm-az.com/"
      >
        <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-[14px] whitespace-pre">Contact</p>
      </a>
    </div>
  );
}

function Component16() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-start px-3 py-0 relative shrink-0"
      data-name="Component 3"
    >
      <Container50 />
    </div>
  );
}

function Menuitem3() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component16 />
    </div>
  );
}

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[2.79px] items-start justify-start pb-0 pt-[4.8px] px-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.42px]">
        <p className="adjustLetterSpacing block leading-[normal] text-[14px] whitespace-pre">Multifamily Rentals</p>
      </div>
      <div className="h-px relative shrink-0 w-[142.61px]" data-name="Horizontal Divider">
        <div
          aria-hidden="true"
          className="absolute border-[#2c393f] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
        />
      </div>
    </div>
  );
}

function Component17() {
  return (
    <a
      className="box-border content-stretch cursor-pointer flex h-full items-center justify-start overflow-visible px-3 py-0 relative shrink-0"
      data-name="Component 3"
      href="https://www.rdm-az.com/portfolio"
    >
      <Container51 />
    </a>
  );
}

function Menuitem4() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component17 />
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
    <div
      className="basis-0 box-border content-stretch flex grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Navigation"
    >
      <Menubar />
    </div>
  );
}

function Container52() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[678.27px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-[678.27px]"
      data-name="Container"
    >
      <Navigation />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[100px] items-center justify-center max-w-[1440px] min-h-2 min-w-[57.6px] pb-[36.71px] pt-[36.7px] px-0 relative shrink-0 w-[678.27px]"
      data-name="Container"
    >
      <Container52 />
    </div>
  );
}

function Component4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[50px] shrink-0 w-full" data-name="Component 4">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pl-[46.85px] pr-[47.07px] py-4 relative size-full">
          <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center w-full">
            <p className="block leading-[normal]">602-432-1380</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[50px] items-start justify-center max-w-[349.19px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-[186px]"
      data-name="Container"
    >
      <Component4 />
    </div>
  );
}

function Container55() {
  return (
    <div
      className="box-border content-stretch flex h-[100px] items-center justify-start max-w-[1440px] min-h-2 min-w-[57.6px] px-0 py-[25px] relative shrink-0 w-[349.19px]"
      data-name="Container"
    >
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="min-h-[100px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center min-h-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start min-h-inherit px-[28.797px] py-0 relative w-full">
          <Container46 />
          <Container53 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div
      className="bg-[#181818] box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Section"
    >
      <Container56 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[2386.44px]"
      data-name="Background"
    >
      <Section2 />
      <Section3 />
    </div>
  );
}

function ReddoortextCopy291E7C951920WPng() {
  return (
    <div
      className="basis-0 bg-[0%_49.99%] bg-no-repeat bg-size-[100%_100.01%] grow max-w-[392px] min-h-px min-w-px shrink-0 w-full"
      data-name="reddoortext+copy-291e7c95-1920w.png"
      style={{ backgroundImage: `url('${imgReddoortextCopy291E7C951920WPng}')` }}
    />
  );
}

function Container57() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <ReddoortextCopy291E7C951920WPng />
    </div>
  );
}

function Container58() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[441.59px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-[392px]"
      data-name="Container"
    >
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[75.08px] items-center justify-center left-[34.67%] max-w-[1440px] min-h-2 min-w-[57.6px] pl-[24.79px] pr-[24.8px] py-1.5 right-[34.67%] top-1/2 translate-y-[-50%]"
      data-name="Container"
    >
      <Container58 />
    </div>
  );
}

function Component18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[50px] shrink-0 w-full" data-name="Component 4">
      <div
        aria-hidden="true"
        className="absolute border border-[#ab0000] border-solid inset-0 pointer-events-none rounded-[50px]"
      />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pl-[93.41px] pr-[93.54px] py-[11px] relative size-full">
          <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 w-full">
            <p className="block leading-[normal] text-[16px]">480.501.1515</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[441.59px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-[280px]"
      data-name="Container"
    >
      <Component18 />
    </div>
  );
}

function Container61() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[75.08px] items-center justify-start left-[4%] max-w-[1440px] min-h-2 min-w-[57.6px] pb-[17.05px] pt-[17.03px] px-4 right-[65.33%] top-1/2 translate-y-[-50%]"
      data-name="Container"
    >
      <Container60 />
    </div>
  );
}

function Component5() {
  return (
    <div className="h-[30px] relative w-5" data-name="Component 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 30">
        <g id="Component 5">
          <path d={svgPaths.pc586380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component5 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center px-[5px] py-0 relative shrink-0 size-[30px]"
      data-name="Container"
    >
      <Container62 />
    </div>
  );
}

function LinkEmail() {
  return (
    <a
      className="box-border content-stretch flex flex-col items-start justify-start overflow-visible p-0 relative self-stretch shrink-0"
      data-name="Link - email"
      href="mailto:walter@familycfo.net"
    >
      <Container63 />
    </a>
  );
}

function Component19() {
  return (
    <div className="h-[30px] relative w-5" data-name="Component 5">
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

function Container64() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component19 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center px-[5px] py-0 relative shrink-0 size-[30px]"
      data-name="Container"
    >
      <Container64 />
    </div>
  );
}

function LinkWhatsapp() {
  return (
    <a
      className="box-border content-stretch flex flex-col items-start justify-start overflow-visible p-0 relative self-stretch shrink-0"
      data-name="Link - whatsapp"
      href="https://web.whatsapp.com/send"
    >
      <Container65 />
    </a>
  );
}

function Container66() {
  return (
    <div
      className="box-border content-stretch cursor-pointer flex flex-wrap gap-[5px] items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <LinkEmail />
      <LinkWhatsapp />
    </div>
  );
}

function Container67() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[441.59px] min-h-2.5 min-w-2.5 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[75.08px] items-center justify-end left-[65.33%] max-w-[1440px] min-h-2 min-w-[57.6px] pb-[20.05px] pt-[20.03px] px-4 right-[4%] top-1/2 translate-y-[-50%]"
      data-name="Container"
    >
      <Container68 />
    </div>
  );
}

function Section4() {
  return (
    <div className="h-[75.08px] relative shrink-0 w-full" data-name="Section">
      <Container59 />
      <Container61 />
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0"
      data-name="Container"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]"
        href="https://www.rdm-az.com/"
      >
        <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-[16px] whitespace-pre">Home</p>
      </a>
    </div>
  );
}

function Component6() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0"
      data-name="Component 6"
    >
      <Container70 />
    </div>
  );
}

function Menuitem5() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component6 />
    </div>
  );
}

function Container71() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0"
      data-name="Container"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]"
        href="https://www.rdm-az.com/"
      >
        <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-[16px] whitespace-pre">About Us</p>
      </a>
    </div>
  );
}

function Component20() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0"
      data-name="Component 6"
    >
      <Container71 />
    </div>
  );
}

function Menuitem6() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component20 />
    </div>
  );
}

function Container72() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0"
      data-name="Container"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]"
        href="https://www.rdm-az.com/"
      >
        <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-[16px] whitespace-pre">Services</p>
      </a>
    </div>
  );
}

function Component21() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0"
      data-name="Component 6"
    >
      <Container72 />
    </div>
  );
}

function Menuitem7() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component21 />
    </div>
  );
}

function Container73() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0"
      data-name="Container"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]"
        href="https://www.rdm-az.com/"
      >
        <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-[16px] whitespace-pre">Contact</p>
      </a>
    </div>
  );
}

function Component22() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0"
      data-name="Component 6"
    >
      <Container73 />
    </div>
  );
}

function Menuitem8() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component22 />
    </div>
  );
}

function Container74() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.18px] items-start justify-start pb-[0.01px] pt-[5.19px] px-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]">
        <p className="adjustLetterSpacing block leading-[normal] text-[16px] whitespace-pre">Multifamily Rentals</p>
      </div>
      <div className="h-px relative shrink-0 w-[162.98px]" data-name="Horizontal Divider">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
        />
      </div>
    </div>
  );
}

function Component23() {
  return (
    <a
      className="box-border content-stretch cursor-pointer flex h-full items-center justify-start overflow-visible px-[15px] py-0 relative shrink-0"
      data-name="Component 6"
      href="https://www.rdm-az.com/portfolio"
    >
      <Container74 />
    </a>
  );
}

function Menuitem9() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component23 />
    </div>
  );
}

function Container75() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[4.19px] pt-[5.19px] px-0 relative shrink-0"
      data-name="Container"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Montserrat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center text-nowrap tracking-[0.48px]"
        href="https://www.rdm-az.com/"
      >
        <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-[16px] whitespace-pre">
          Vacation Rentals
        </p>
      </a>
    </div>
  );
}

function Component24() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-start px-[15px] py-0 relative shrink-0"
      data-name="Component 6"
    >
      <Container75 />
    </div>
  );
}

function Menuitem10() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start p-0 relative shrink-0"
      data-name="Menuitem"
    >
      <Component24 />
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
    <div
      className="basis-0 box-border content-stretch flex grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Navigation"
    >
      <Menubar1 />
    </div>
  );
}

function Container76() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[1142.41px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-[1110.41px]"
      data-name="Container"
    >
      <Navigation1 />
    </div>
  );
}

function Container77() {
  return (
    <div className="basis-0 grow h-[32.38px] max-w-[1200px] min-h-2 min-w-12 relative shrink-0" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col h-[32.38px] items-center justify-center max-w-inherit min-h-inherit min-w-inherit px-4 py-0.5 relative w-full">
          <Container76 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-start max-w-inherit pb-1.5 pt-4 px-[28.797px] relative w-full">
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div
        aria-hidden="true"
        className="absolute border-[#c0c4c9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-[120px] relative w-full">
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#181818] box-border content-stretch flex flex-col items-start justify-start pb-[14.391px] pointer-events-auto pt-0 px-0 sticky top-0"
      data-name="Background"
    >
      <Section4 />
      <Section5 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[2660.44px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Background />
      <div className="absolute inset-0 pointer-events-none">
        <Background1 />
      </div>
    </div>
  );
}

export default function Background2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Background"
    >
      <Container79 />
    </div>
  );
}