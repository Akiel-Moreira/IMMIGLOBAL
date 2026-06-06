export type CountryCode = 'USA' | 'CAN' | 'PRT' | 'ESP' | 'AUS';

export type VisaCategory = 'PERMANENTE' | 'TEMPORARIO' | 'VISITANTE';

export interface VisaStep {
  title: string;
  desc: string;
  link?: string;
  linkText?: string;
}

export interface VisaDetail {
  id: string;
  name: string;
  subtitle: string;
  group: VisaCategory;
  difficulty: 'Fácil' | 'Médio' | 'Difícil' | 'Muito Difícil';
  difficultyScore: number; // 0 to 100
  description: string;
  typicalAgeGroup: string;
  idealProfile: string;
  requirements: string[];
  steps: VisaStep[];
  officialLink: string;
  officialLinkText: string;
  processingTime: string;
  applicationFee: string;
  requiredDocuments?: string[];
  detailedFees?: { item: string; cost: string }[];
  systemOverview?: string;
}

export interface CountryInfo {
  code: CountryCode;
  name: string;
  flag: string;
  tagline: string;
  bannerImage: string;
  desc: string;
  visas: VisaDetail[];
}

export interface SurveyQuestion {
  id: string;
  text: string;
  subtitle: string;
  options: {
    label: string;
    value: string;
    // points configuration to rank which visa matches best
    points?: Record<string, number>;
  }[];
}

export interface ConsultationRequest {
  name: string;
  email: string;
  phone: string;
  age: string;
  destination: CountryCode;
  visaOfInterest: string;
  education: string;
  message: string;
}
