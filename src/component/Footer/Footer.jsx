import Section from "./Section"
function Footer() {
    const colPertama =[
        {
            title :'Furniture',
            deskripsi : ['400 University Drive Suite 200 Coral','Gables,','FL 33134 USA']
        }
         ]
    const colKedua =[
        {
            title :'Links',
            deskripsi : ['Home','Shop','About','Contact']
        }
         ]
    const colKetiga =[
        {
            title :'Help',
            deskripsi : ['Payment Options','Returns','Privacy Policies']
        }
         ]
    const colKeempat =[
        {
            title :'Newsletter',
            deskripsi : ['enteryour email address','Submit']
        }
         ]
    const colKelima = '2023 furniture. All rights reverved'
  return (
    <div>
      <Section colPertama={colPertama} colKedua={colKedua} colKetiga={colKetiga} colKeempat={colKeempat} colKelima={colKelima}/>
    </div>
  )
}

export default Footer
