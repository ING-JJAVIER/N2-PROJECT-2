export default function ImgCont({ img: { farm, server, id, secret, title } }) {
    return (
        <div className="w-40 h-40 m-4 shadow-lg hover:size-64 hover:border-4 rounded-xl border-solid  border-animated overflow-hidden">
            <img className="object-cover w-40 h-40 rounded-lg cursor-pointer hover:size-96" src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt={title} />
        </div>


    )
}