
function Body(){
    return(
        <>
          <div class="bg-gray-300 p-20">
          <div id="con" class="max-w-md mx-auto bg-gray-200 p-8 rounded-lg shadow-md my-20">
        <h2 class="text-2xl font-bold mb-6">Naga lasoo xariir </h2>
        <form id="contact-form">
            <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="name">Magacaaga:</label>
                <input type="text" id="name" name="name" class="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="email">Email-kaaga:</label>
                <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="message">Farriintaada:</label>
                <textarea id="message" name="message" class="w-full p-2 border border-gray-300 rounded" required></textarea>
            </div>
            <button type="submit" class="w-full bg-[#CA6B41] text-white p-2 rounded hover:bg-blue-600">Dir Farriinta</button>
        </form>
        <div id="response" class="mt-4"></div>
    </div>
          </div>
        </>
    )
}

export default Body;