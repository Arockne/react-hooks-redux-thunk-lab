// write your CatList component here

function CatList({ catPics }) {
  return (
    <div>
      {
        catPics.map((pic) => {
          return <img key={pic.id} src={pic.url} alt="cat" width="300"/>
        })
      }
    </div>
  )
}

export default CatList