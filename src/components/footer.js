import React from 'react'


function Footer() {
    return (
        <footer class="text-gray-600 bg-gray-100">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2022, Talking Travel — All Rights Reserved.
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href='/' class="text-gray-500">
                        Home
                    </a>
                    <a href='/' class="ml-3 text-gray-500">
                        Blog
                    </a>
                    <a href='/' class="ml-3 text-gray-500">
                        Gallery
                    </a>
                    <a href='/' class="ml-3 text-gray-500">
                        Contact Us
                    </a>
                </span>
            </div>
        </footer>
    )
}


export default Footer