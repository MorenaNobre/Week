import React from "react";
import Icon1 from '../../icons/svg-5.svg'
import Icon2 from '../../icons/svg-4.svg'
import Icon3 from '../../icons/svg-6.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Tipos de Comunicação</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Verbal</ServicesH2>
          <ServicesP>
            Comunicar-se com boa entonação, ritmo e pronúncia clara.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Escrita</ServicesH2>
          <ServicesP>
            Redigir um texto claro, ou um email expondo ideias de forma assertiva.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Corporal</ServicesH2>
          <ServicesP>
            Sintonia entre comunicação verbal e corporal, se fazer entender.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
