export const SITE = {
  name: 'Tungtung Tutor',
  url: 'https://tungtung-tutor.com',
  title: 'Tungtung Tutor | สอนพิเศษคณิตศาสตร์ & Programming ออนไลน์ ตัวต่อตัวและกลุ่ม',
  description:
    'รับสอนพิเศษคณิตศาสตร์ & Programming (Python / C / C++) แบบ Online ตัวต่อตัวและกลุ่ม สอนเข้าใจจริง ไม่เร่ง ไม่กดดัน ถามได้ทุกเรื่อง! โดยวิศวกรรมคอมพิวเตอร์ มก. เด็กทุน วมว. สอวน. คณิต & คอม',
  locale: 'th_TH',
} as const;

export const CONTACTS = {
  line: 'https://line.me/ti/p/~tungtungtutor',
  messenger: 'https://m.me/tungtungtutor',
} as const;

export const NAV = [
  { href: '#about', label: 'ผู้สอน' },
  { href: '#courses', label: 'คอร์ส' },
  { href: '#pricing', label: 'ราคา' },
  { href: '#reviews', label: 'รีวิว' },
  { href: '#contact', label: 'ติดต่อ' },
] as const;

export const HERO = {
  brand: 'TUNGTUNG TUTOR',
  badge: 'ONLINE LIVE 1-ON-1 & GROUP CLASS',
  eyebrow: 'รับสอนพิเศษตัวต่อตัว & กลุ่มออนไลน์',
  title: 'คณิตศาสตร์ & Programming',
  tagline: '“สอนเข้าใจจริง ไม่เร่ง ไม่กดดัน ถามได้ทุกเรื่อง!”',
  tag: 'เน้น Online เป็นหลัก',
  credentialsHeading: 'ประวัติการศึกษาและผลงานผู้สอน',
  credentialsSub: 'ประสบการณ์สอนสถาบัน & หลักสูตรอินเตอร์',
  credentials: [
    'ทุนโครงการ วมว. โรงเรียนสุรวิวัฒน์ มทส.',
    'จบการศึกษาจาก วิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์',
    'ประสบการณ์สอนในสถาบันกวดวิชา & หลักสูตร International',
    'สอวน. คณิตศาสตร์ ค่าย 1 & สอวน. คอมพิวเตอร์ ค่าย 2',
    'ตัวสำรอง สอวน. เคมี ค่าย 1',
    'คะแนน O-NET คณิตศาสตร์ ม.ต้น 100 / 100 เต็ม',
  ],
} as const;

export interface Course {
  id: string;
  title: string;
  tag: string;
  accent: string;
  dark?: boolean;
  topics: string[];
}

export const COURSES: Course[] = [
  {
    id: 'math',
    title: 'f(x) คณิตศาสตร์',
    tag: 'ประถม – ม.ปลาย',
    accent: '#C6F135',
    topics: [
      'ปูพื้นฐานคณิตศาสตร์ใหม่ตั้งแต่ต้น',
      'ติวเพิ่มเกรด / การบ้าน / สอบกลางภาค-ปลายภาค',
      'ติวสอบเข้า ม.1 / ม.4 / มหาวิทยาลัย',
      'หลักสูตร International',
      'ติวตาม Curriculum / หนังสือ / Worksheet โรงเรียน',
      'เตรียมพื้นฐานโจทย์แข่งขัน & สอวน. คณิตศาสตร์',
      'ส่งชีทหรือข้อสอบจากโรงเรียนมาติวเฉพาะเรื่องได้',
    ],
  },
  {
    id: 'programming',
    title: '</> Programming / CS',
    tag: 'Beginner – POSN',
    accent: '#FF5722',
    dark: true,
    topics: [
      'Programming สำหรับผู้เริ่มต้นตั้งแต่ศูนย์',
      'ภาษา Python / C / C++ และพื้นฐาน SQL / Database',
      'Algorithm, Problem Solving & Data Structure เบื้องต้น',
      'ติวสอบวิชา Programming / Computer Science',
      'เตรียมพื้นฐาน สอวน. คอมพิวเตอร์ & โจทย์แข่งขัน',
      'ให้คำปรึกษาและสอนทำ Project CS เบื้องต้น',
      'ช่วยอธิบาย / Debug Code ที่เรียนมาแล้วไม่เข้าใจ',
    ],
  },
];

export const PRICING = {
  heading: 'อัตราค่าเรียน Online (บาท / คน / ชั่วโมง)',
  pill: 'ชวนเพื่อนมาหาร คุ้มกว่าเดิม!',
  columns: ['รูปแบบการเรียน (ชวนเพื่อนมาเอง)', 'คณิตศาสตร์', 'Programming / CS'],
  rows: [
    { label: 'เรียนเดี่ยว (1 คน)', math: 250, prog: 300 },
    { label: 'กลุ่ม 2 คน', badge: 'ประหยัด 50 บ.', math: 200, prog: 250 },
    { label: 'กลุ่ม 3 – 4 คน', badge: 'ประหยัด 100 บ.', math: 150, prog: 200 },
    { label: 'กลุ่ม 5 คนขึ้นไป', badge: 'คุ้มสุด! ลดครึ่งนึง', math: 120, prog: 150, highlight: true },
  ],
  noteTag: '[ENGLISH]',
  note:
    'หลักสูตรนานาชาติที่ให้สื่อสาร/อธิบายเป็นภาษาไทย คิดราคาปกติ! (บวกเพิ่ม +100 บ./ชม. เฉพาะกรณีให้สอนพูดภาษาอังกฤษล้วน)',
} as const;

export const REVIEWS = {
  heading: 'รีวิวจากนักเรียน & ผู้ปกครอง',
  sub: 'กำลังรวบรวมภาพรีวิว เร็ว ๆ นี้',
  // Add `image: '/reviews/xxx.webp'` later to render a lazy-loaded screenshot.
  items: [
    { id: 1, rotate: '-rotate-1', bg: '#FFFFFF' },
    { id: 2, rotate: 'rotate-1', bg: '#C6F135' },
    { id: 3, rotate: '-rotate-1', bg: '#FFFFFF' },
  ] as { id: number; rotate: string; bg: string; image?: string; alt?: string }[],
  availability: {
    title: 'ตารางเวลาว่าง',
    text: 'อัปเดตเร็ว ๆ นี้ — ทักสอบถามช่วงเวลาที่ว่างได้โดยตรงเลยครับ',
  },
} as const;

export const DETAILS = [
  { title: 'เรียนครั้งละ 1 – 2 ชม.', text: 'ขั้นต่ำ 1 ชม. เลือกเรียน 1.5 หรือ 2 ชม. ได้ตามสะดวก' },
  { title: 'สอนสนุก ไม่เครียด คุยเล่นได้', text: 'อธิบายเป็นกันเอง ถามซ้ำได้ตลอดจนกว่าจะเข้าใจจริง' },
  { title: 'On-site สอบถามได้', text: 'เน้นสอน Online เป็นหลัก (On-site มีค่าเดินทางตามพื้นที่)' },
  { title: 'ปรับเนื้อหาตามผู้เรียน', text: 'สามารถส่งชีท/หัวข้อที่ต้องการเน้นมาให้วางแผนก่อนเรียนได้' },
] as const;

export const CTA = {
  headline: 'สนใจทักแชท หรือ Comment สอบถามได้เลยครับ!',
  sub: 'แจ้ง: ระดับชั้น / วิชา / เป้าหมาย / จำนวนคนเรียน เดี๋ยวพี่ช่วยวางแผนและจัดคอร์สให้ครับ',
} as const;
