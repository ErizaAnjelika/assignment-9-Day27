import Product from './Product';

const Section = () => {
  const productText = ['Browse The Range', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'];
  const imgProduct1 = [
    {
      image: '/utilities/img/img-1.png',
      teks: 'Dining',
    },
    {
      image: '/utilities/img/img2.png',
      teks: 'Living',
    },
    {
      image: '/utilities/img/img-3.png',
      teks: 'Bedroom',
    },
  ];
  const imgProduct2 = [
    {
      img: 'utilities/img/image 1.png',
      judul: 'Sytherine',
      deskripsi: 'Stylish cafe chair',
      harga: 'Rp 2.500.000',
    },
    {
      img: '/utilities/img/image 2.png',
      judul: 'Leviosa',
      deskripsi: 'Stylish cafe chair',
      harga: 'Rp 2.500.000',
    },
    {
      img: '/utilities/img/image 3.png',
      judul: 'Lolito',
      deskripsi: 'Stylish cafe chair',
      harga: 'Rp 7000.000',
    },
    {
      img: '/utilities/img/image 4.png',
      judul: 'Respira',
      deskripsi: 'Outdoor bar table and stool',
      harga: 'Rp 500.000',
    },
    {
      img: '/utilities/img/image 5.png',
      judul: 'Grifo',
      deskripsi: 'Night lamp',
      harga: 'Rp 1.500.000',
    },
    {
      img: '/utilities/img/image 6.png',
      judul: 'Muggo',
      deskripsi: 'Small mug',
      harga: 'Rp 150.000',
    },
    {
      img: '/utilities/img/image 7.png',
      judul: 'Pingky',
      deskripsi: 'Cute bed set',
      harga: 'Rp 7000.000',
    },
    {
      img: '/utilities/img/image 8.png',
      judul: 'Potty',
      deskripsi: 'Minimalist flower pot',
      harga: 'Rp 500.000',
    },
  ];
  return (
    <Product
      productText={productText}
      imgProduct1={imgProduct1}
      imgProduct2={imgProduct2}
    />
  );
};

export default Section;
