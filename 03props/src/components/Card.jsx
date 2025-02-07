import React from 'react'

const Card = ({username = 'NV', post ='not assigned yet'}) => {

    // console.log('props',props);
    
    return (
        <div >

            
           <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/9093331/pexels-photo-9093331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">{username}</span>
    <span class="font-medium text-sky-500">{post}</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>


            {/* <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
                <div>
                    <img className="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
                </div>
                <div className=" items-center md:items-start">
                    <span className="text-2xl font-medium">Class Warfare</span>
                    <span className="font-medium text-sky-500">The Anti-Patterns</span>
                    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                        <span>No. 4</span>
                        <span>·</span>
                        <span>2025</span>
                    </span>
                </div>
            </div>

            <div>


                <div className='flex gap-1'>
                    <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                </div>
                <h1 className='text-2xl bg-fuchsia-600 p-3 rounded'>Card for Photos </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed atque optio adipisci quas ipsa expedita tenetur minima magnam iure earum facere soluta error animi, ratione dolore sunt reiciendis necessitatibus deleniti repellat dolorem.</p>
            </div>

            <div className='text-center items-center '>
                <img className='ml-11 mt-5' src="https://images.pexels.com/photos/9093331/pexels-photo-9093331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h1 className='text-2xl bg-fuchsia-600 p-3 rounded'>Card for Photos </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed atque optio adipisci quas ipsa expedita tenetur minima magnam iure earum facere soluta error animi, ratione dolore sunt reiciendis necessitatibus deleniti repellat dolorem.</p>
            </div> */}




        </div>
    )
}

export default Card