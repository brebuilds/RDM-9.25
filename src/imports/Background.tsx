import imgBackground from "../images/edward-chapman.png";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] w-full">
        <p className="block leading-[normal]">Property Manager</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] w-full">
        <p className="block leading-[normal]">Taylor Wilson</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[38px] items-start justify-center max-w-[259.89px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-[258.47px]"
      data-name="Container"
    >
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <a
        className="flex flex-col font-['Montserrat:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-100 text-right w-full"
        href="https://rdm-az.com/view-bio"
      >
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer leading-[16px]">
          VIEW BIO
        </p>
      </a>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-center max-w-[259.89px] min-h-2.5 min-w-2.5 p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container5 />
    </div>
  );
}

export default function Background() {
  return (
    <div
      className="bg-no-repeat bg-size-[111.87%_100%] bg-top box-border content-stretch flex flex-col items-start justify-end p-0 relative rounded-[10px] size-full"
      data-name="Background"
      style={{ backgroundImage: `url('${imgBackground}')` }}
    >
      <div
        className="absolute bg-gradient-to-t from-[#0000007a] inset-0 opacity-80 rounded-[10px] to-[#00000000]"
        data-name="Gradient"
      />
      <Container3 />
      <Container6 />
    </div>
  );
}