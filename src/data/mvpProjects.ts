export interface MVPProject {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  techStack: string[];
  category: string;
  developmentPeriod: string;
  features: string[];
}

export const mvpProjects: MVPProject[] = [
  {
    id: 1,
    title: "스마트 주유소 통합관리",
    description: "IoT 기반 주유소 운영 최적화 플랫폼",
    thumbnail: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop",
    url: "https://smart-gas-station.demo.com",
    techStack: ["React", "Node.js", "IoT", "PostgreSQL"],
    category: "IoT",
    developmentPeriod: "3개월",
    features: ["실시간 재고관리", "자동 결제시스템", "운영 데이터 분석"]
  },
  {
    id: 2,
    title: "AI 기반 복지 플랫폼",
    description: "인공지능으로 맞춤형 복지 서비스 추천",
    thumbnail: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=300&fit=crop",
    url: "https://ai-welfare.demo.com",
    techStack: ["Python", "TensorFlow", "React", "MongoDB"],
    category: "AI",
    developmentPeriod: "4개월",
    features: ["맞춤형 복지 추천", "자격요건 자동 검증", "신청 프로세스 간소화"]
  },
  {
    id: 3,
    title: "블록체인 투표 시스템",
    description: "투명하고 안전한 전자투표 플랫폼",
    thumbnail: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop",
    url: "https://blockchain-vote.demo.com",
    techStack: ["Solidity", "Ethereum", "Web3.js", "React"],
    category: "Blockchain",
    developmentPeriod: "5개월",
    features: ["무결성 보장", "익명성 보호", "실시간 개표"]
  },
  {
    id: 4,
    title: "헬스케어 모니터링",
    description: "웨어러블 기기 연동 건강관리 앱",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    url: "https://health-monitor.demo.com",
    techStack: ["React Native", "Firebase", "HealthKit", "Python"],
    category: "Healthcare",
    developmentPeriod: "6개월",
    features: ["실시간 건강데이터 수집", "AI 건강 분석", "의료진 연동"]
  },
  {
    id: 5,
    title: "스마트 팜 관리시스템",
    description: "IoT 센서 기반 농장 자동화 솔루션",
    thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
    url: "https://smart-farm.demo.com",
    techStack: ["Vue.js", "Python", "IoT", "InfluxDB"],
    category: "Agriculture",
    developmentPeriod: "4개월",
    features: ["환경 모니터링", "자동 급수시스템", "작물 성장 예측"]
  },
  {
    id: 6,
    title: "교육 콘텐츠 관리",
    description: "AI 기반 개인화 학습 플랫폼",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    url: "https://edu-platform.demo.com",
    techStack: ["Next.js", "OpenAI", "PostgreSQL", "Redis"],
    category: "Education",
    developmentPeriod: "5개월",
    features: ["개인화 학습경로", "진도 분석", "AI 튜터링"]
  },
  {
    id: 7,
    title: "부동산 거래 플랫폼",
    description: "블록체인 기반 투명한 부동산 거래",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    url: "https://real-estate.demo.com",
    techStack: ["React", "Ethereum", "IPFS", "Node.js"],
    category: "Real Estate",
    developmentPeriod: "6개월",
    features: ["스마트 컨트랙트", "소유권 증명", "거래 이력 추적"]
  },
  {
    id: 8,
    title: "공급망 관리 시스템",
    description: "제품 이력 추적 및 품질관리 솔루션",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    url: "https://supply-chain.demo.com",
    techStack: ["Angular", "Hyperledger", "PostgreSQL", "Docker"],
    category: "Supply Chain",
    developmentPeriod: "7개월",
    features: ["제품 추적", "품질 인증", "재고 최적화"]
  },
  {
    id: 9,
    title: "금융 리스크 분석",
    description: "머신러닝 기반 투자 리스크 평가",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    url: "https://risk-analysis.demo.com",
    techStack: ["Python", "Scikit-learn", "FastAPI", "React"],
    category: "FinTech",
    developmentPeriod: "4개월",
    features: ["리스크 스코어링", "포트폴리오 분석", "시장 예측"]
  },
  {
    id: 10,
    title: "환경 모니터링 네트워크",
    description: "도시 대기질 실시간 모니터링",
    thumbnail: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop",
    url: "https://env-monitor.demo.com",
    techStack: ["IoT", "Python", "InfluxDB", "Grafana"],
    category: "Environment",
    developmentPeriod: "5개월",
    features: ["실시간 대기질 측정", "환경 알림", "데이터 시각화"]
  },
  {
    id: 11,
    title: "배송 최적화 시스템",
    description: "AI 기반 물류 경로 최적화",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    url: "https://delivery-optimizer.demo.com",
    techStack: ["Python", "TensorFlow", "Google Maps API", "React"],
    category: "Logistics",
    developmentPeriod: "4개월",
    features: ["경로 최적화", "실시간 추적", "비용 절감 분석"]
  },
  {
    id: 12,
    title: "의료 진단 보조",
    description: "의료영상 AI 분석 시스템",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    url: "https://medical-ai.demo.com",
    techStack: ["Python", "PyTorch", "OpenCV", "Flask"],
    category: "Medical",
    developmentPeriod: "8개월",
    features: ["영상 분석", "진단 보조", "의료진 협업"]
  },
  {
    id: 13,
    title: "스마트 시티 대시보드",
    description: "도시 인프라 통합 관리 플랫폼",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    url: "https://smart-city.demo.com",
    techStack: ["Vue.js", "D3.js", "PostgreSQL", "WebSocket"],
    category: "Smart City",
    developmentPeriod: "6개월",
    features: ["실시간 도시 현황", "인프라 관리", "시민 서비스"]
  },
  {
    id: 14,
    title: "보안 로그 분석",
    description: "AI 기반 사이버 보안 위협 탐지",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    url: "https://security-analyzer.demo.com",
    techStack: ["Python", "ELK Stack", "Machine Learning", "Kafka"],
    category: "Security",
    developmentPeriod: "5개월",
    features: ["위협 탐지", "로그 분석", "보안 알림"]
  },
  {
    id: 15,
    title: "에너지 관리 시스템",
    description: "스마트 그리드 연동 에너지 최적화",
    thumbnail: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
    url: "https://energy-mgmt.demo.com",
    techStack: ["React", "Time Series DB", "MQTT", "Python"],
    category: "Energy",
    developmentPeriod: "7개월",
    features: ["에너지 사용 최적화", "비용 절감", "친환경 에너지 관리"]
  },
  {
    id: 16,
    title: "소셜 커머스 플랫폼",
    description: "SNS 기반 상품 추천 및 판매",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    url: "https://social-commerce.demo.com",
    techStack: ["React Native", "GraphQL", "MongoDB", "Redis"],
    category: "E-commerce",
    developmentPeriod: "6개월",
    features: ["소셜 쇼핑", "인플루언서 연동", "개인화 추천"]
  },
  {
    id: 17,
    title: "드론 택배 시스템",
    description: "자율비행 드론 배송 관리",
    thumbnail: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
    url: "https://drone-delivery.demo.com",
    techStack: ["Python", "ROS", "OpenCV", "React"],
    category: "Robotics",
    developmentPeriod: "8개월",
    features: ["자율비행", "배송 관리", "안전 시스템"]
  },
  {
    id: 18,
    title: "온라인 협업 도구",
    description: "실시간 문서 편집 및 화상회의",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    url: "https://collab-tools.demo.com",
    techStack: ["React", "WebRTC", "Socket.io", "MongoDB"],
    category: "Productivity",
    developmentPeriod: "5개월",
    features: ["실시간 편집", "화상회의", "프로젝트 관리"]
  },
  {
    id: 19,
    title: "자동차 진단 시스템",
    description: "OBD-II 기반 차량 상태 모니터링",
    thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
    url: "https://car-diagnostic.demo.com",
    techStack: ["Flutter", "Firebase", "OBD-II", "Python"],
    category: "Automotive",
    developmentPeriod: "4개월",
    features: ["차량 진단", "정비 알림", "운전 패턴 분석"]
  },
  {
    id: 20,
    title: "음성 번역 서비스",
    description: "실시간 다국어 음성 번역",
    thumbnail: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=300&fit=crop",
    url: "https://voice-translator.demo.com",
    techStack: ["Python", "Google Speech API", "TensorFlow", "React"],
    category: "AI Translation",
    developmentPeriod: "6개월",
    features: ["실시간 번역", "다국어 지원", "음성 인식"]
  },
  {
    id: 21,
    title: "게임화 피트니스",
    description: "RPG 요소가 있는 운동 앱",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    url: "https://fitness-game.demo.com",
    techStack: ["Unity", "C#", "Firebase", "AR Core"],
    category: "Fitness",
    developmentPeriod: "7개월",
    features: ["게임화 운동", "AR 피트니스", "소셜 경쟁"]
  },
  {
    id: 22,
    title: "디지털 자산 관리",
    description: "NFT 및 암호화폐 포트폴리오 관리",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    url: "https://crypto-portfolio.demo.com",
    techStack: ["React", "Web3.js", "Ethereum", "Chart.js"],
    category: "Crypto",
    developmentPeriod: "5개월",
    features: ["포트폴리오 추적", "NFT 관리", "시장 분석"]
  },
  {
    id: 23,
    title: "스마트 홈 컨트롤",
    description: "IoT 기기 통합 홈 자동화",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    url: "https://smart-home.demo.com",
    techStack: ["React Native", "MQTT", "Raspberry Pi", "Node.js"],
    category: "Smart Home",
    developmentPeriod: "6개월",
    features: ["기기 제어", "자동화 시나리오", "에너지 절약"]
  },
  {
    id: 24,
    title: "여행 계획 AI",
    description: "개인 맞춤형 여행 일정 생성",
    thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    url: "https://travel-ai.demo.com",
    techStack: ["Python", "OpenAI", "React", "Google Places API"],
    category: "Travel",
    developmentPeriod: "4개월",
    features: ["AI 여행 계획", "실시간 정보", "예산 관리"]
  },
  {
    id: 25,
    title: "음식 배달 최적화",
    description: "AI 기반 배달 시간 예측 시스템",
    thumbnail: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=300&fit=crop",
    url: "https://food-delivery-ai.demo.com",
    techStack: ["Python", "TensorFlow", "React Native", "PostgreSQL"],
    category: "Food Tech",
    developmentPeriod: "5개월",
    features: ["배달 시간 예측", "경로 최적화", "실시간 추적"]
  },
  {
    id: 26,
    title: "법률 문서 분석",
    description: "AI 기반 계약서 리뷰 시스템",
    thumbnail: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
    url: "https://legal-ai.demo.com",
    techStack: ["Python", "NLP", "Transformers", "React"],
    category: "Legal Tech",
    developmentPeriod: "6개월",
    features: ["문서 분석", "리스크 평가", "조항 검토"]
  },
  {
    id: 27,
    title: "가상현실 교육",
    description: "VR 기반 몰입형 학습 플랫폼",
    thumbnail: "https://images.unsplash.com/photo-1592478411213-6153e4ec207d?w=400&h=300&fit=crop",
    url: "https://vr-education.demo.com",
    techStack: ["Unity", "C#", "Oculus SDK", "WebXR"],
    category: "VR Education",
    developmentPeriod: "8개월",
    features: ["VR 학습 환경", "인터랙티브 콘텐츠", "학습 진도 추적"]
  },
  {
    id: 28,
    title: "소음 모니터링",
    description: "도시 소음 실시간 측정 네트워크",
    thumbnail: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=400&h=300&fit=crop",
    url: "https://noise-monitor.demo.com",
    techStack: ["IoT", "Python", "InfluxDB", "React"],
    category: "Environment",
    developmentPeriod: "4개월",
    features: ["소음 측정", "패턴 분석", "민원 관리"]
  },
  {
    id: 29,
    title: "펫케어 플랫폼",
    description: "반려동물 건강관리 종합 서비스",
    thumbnail: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
    url: "https://pet-care.demo.com",
    techStack: ["React Native", "Firebase", "TensorFlow", "Stripe"],
    category: "Pet Tech",
    developmentPeriod: "5개월",
    features: ["건강 기록", "수의사 상담", "펫시터 매칭"]
  },
  {
    id: 30,
    title: "농산물 직거래",
    description: "생산자-소비자 직접 연결 플랫폼",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed748d6?w=400&h=300&fit=crop",
    url: "https://farm-direct.demo.com",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Socket.io"],
    category: "AgriTech",
    developmentPeriod: "4개월",
    features: ["직거래 플랫폼", "품질 인증", "배송 관리"]
  },
  {
    id: 31,
    title: "멘탈헬스 챗봇",
    description: "AI 기반 심리상담 보조 서비스",
    thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
    url: "https://mental-health-bot.demo.com",
    techStack: ["Python", "OpenAI", "React", "PostgreSQL"],
    category: "Mental Health",
    developmentPeriod: "6개월",
    features: ["AI 상담", "감정 분석", "전문가 연결"]
  },
  {
    id: 32,
    title: "재활용품 분류",
    description: "이미지 인식 기반 폐기물 분류",
    thumbnail: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
    url: "https://recycle-classifier.demo.com",
    techStack: ["Python", "OpenCV", "TensorFlow", "React"],
    category: "Sustainability",
    developmentPeriod: "5개월",
    features: ["폐기물 분류", "재활용 가이드", "환경 점수"]
  },
  {
    id: 33,
    title: "날씨 예측 AI",
    description: "머신러닝 기반 정밀 날씨 예보",
    thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    url: "https://weather-ai.demo.com",
    techStack: ["Python", "Scikit-learn", "FastAPI", "React"],
    category: "Weather Tech",
    developmentPeriod: "7개월",
    features: ["정밀 예보", "기상 패턴 분석", "재해 예측"]
  },
  {
    id: 34,
    title: "코딩 교육 플랫폼",
    description: "AI 튜터와 함께하는 프로그래밍 학습",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
    url: "https://coding-tutor.demo.com",
    techStack: ["React", "Monaco Editor", "OpenAI", "Docker"],
    category: "EdTech",
    developmentPeriod: "6개월",
    features: ["AI 튜터링", "코드 리뷰", "실습 환경"]
  },
  {
    id: 35,
    title: "전기차 충전소 찾기",
    description: "전기차 충전소 실시간 현황 서비스",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop",
    url: "https://ev-charger.demo.com",
    techStack: ["React Native", "Google Maps", "Firebase", "WebSocket"],
    category: "EV Tech",
    developmentPeriod: "4개월",
    features: ["충전소 찾기", "실시간 현황", "예약 시스템"]
  },
  {
    id: 36,
    title: "미세먼지 예측",
    description: "AI 기반 대기질 예측 서비스",
    thumbnail: "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?w=400&h=300&fit=crop",
    url: "https://air-quality-ai.demo.com",
    techStack: ["Python", "TensorFlow", "React", "Time Series"],
    category: "Environment",
    developmentPeriod: "5개월",
    features: ["미세먼지 예측", "건강 알림", "지역별 분석"]
  },
  {
    id: 37,
    title: "온라인 카페 주문",
    description: "QR 코드 기반 무인 주문 시스템",
    thumbnail: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop",
    url: "https://cafe-order.demo.com",
    techStack: ["React", "QR Code", "Stripe", "WebSocket"],
    category: "F&B Tech",
    developmentPeriod: "3개월",
    features: ["QR 주문", "결제 시스템", "재고 관리"]
  },
  {
    id: 38,
    title: "주차공간 공유",
    description: "개인 주차공간 임대 중개 플랫폼",
    thumbnail: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=300&fit=crop",
    url: "https://parking-share.demo.com",
    techStack: ["Next.js", "Google Maps", "Stripe", "PostgreSQL"],
    category: "Sharing Economy",
    developmentPeriod: "5개월",
    features: ["주차공간 검색", "예약 시스템", "결제 관리"]
  },
  {
    id: 39,
    title: "빅데이터 분석 도구",
    description: "비개발자를 위한 데이터 분석 플랫폼",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    url: "https://data-analyzer.demo.com",
    techStack: ["Python", "Pandas", "Streamlit", "PostgreSQL"],
    category: "Data Analytics",
    developmentPeriod: "6개월",
    features: ["드래그앤드롭 분석", "시각화", "보고서 생성"]
  },
  {
    id: 40,
    title: "크라우드펀딩 플랫폼",
    description: "블록체인 기반 투명한 펀딩 서비스",
    thumbnail: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=300&fit=crop",
    url: "https://crowd-funding.demo.com",
    techStack: ["React", "Ethereum", "Web3.js", "IPFS"],
    category: "FinTech",
    developmentPeriod: "7개월",
    features: ["스마트 컨트랙트", "투명한 펀딩", "토큰 리워드"]
  }
];