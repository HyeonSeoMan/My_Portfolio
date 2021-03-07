const initialState = [
  {
    title: 'Oeda',
    skill: 'Spring',
    idx: 0,
    period: '19.04 - 19.06',
    summary: 'Photography, set and editorial design for the in cologne based industrial duo G&K',
    detail: 'Gerdesmeyer & Krohn is an office for industrial and interior design based in Cologne / Germany. Founded by Christoph Gerdesmeyer and Jonas Krohn, their core work is to create new products and interiors. Together with Studio OUI R, I created the visual language, scenography, and the editorial design of their products.',
    images: ['img_proj1_1.jpeg', 'img_proj1_2.jpeg', 'img_proj1_3.jpeg', 'img_proj1_4.jpeg', 'img_proj1_5.jpeg']
  },
  {
    title: 'Bixby',
    skill: 'Bixby Capsule',
    idx: 1,
    period: '19.10 - 19.11',
    summary: '',
    detail: '',
    images: ['img_proj2_1.jpeg', 'img_proj2_2.jpeg', 'img_proj2_3.jpeg', 'img_proj2_4.jpeg', 'img_proj2_5.jpeg']
  },
  {
    title: 'StayLab',
    skill: 'Vue',
    idx: 2,
    period: '20.06 - 20.10',
    summary: '',
    detail: '',
    images: ['img_proj3_1.jpeg', 'img_proj3_2.jpeg', 'img_proj3_3.jpeg', 'img_proj3_4.jpeg', 'img_proj3_5.jpeg']
  },
  {
    title: 'Geolocation',
    skill: 'Vue',
    idx: 3,
    period: '20.09 - 20.11',
    summary: '',
    detail: '',
    images: ['img_proj4_1.jpeg', 'img_proj4_2.jpeg', 'img_proj4_3.jpeg']
  },
  {
    title: 'Portfolio',
    skill: 'React',
    idx: 4,
    period: '21.03 - 21.03',
    summary: '',
    detail: '',
    images: ['img_proj5_1.jpeg']
  }
];

export default function projects(state = initialState, action) {
  return state;
}