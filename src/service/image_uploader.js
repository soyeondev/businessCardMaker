

class ImageUploader {
 

    async upload(file){
        const url = process.env.REACT_APP_CLOUDINARY_API_KEY;
        const pname = process.env.REACT_APP_CLOUDINARY_PROJECT_NAME;

        console.log(`${url}`);
        console.log(pname);
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'ulfpg975');
        // data.append('upload_preset', {pname});
        const result = await fetch(
            'https://api.cloudinary.com/v1_1/dotlrkr0k/image/upload',
            // {url},
            {
                method: 'POST',
                body: data,
            }
        );
        return await result.json();

        //     const form = document.querySelector("form");

    //     form.addEventListener("submit", (e) => {
    //       e.preventDefault();
        
    //       const files = document.querySelector("[type=file]").files;
    //       const formData = new FormData();
        
    //       for (let i = 0; i < files.length; i++) {
    //         let file = files[i];
    //         formData.append("file", file);
    //         formData.append("upload_preset", `${pname}`);
        
    //         fetch(`${url}`, {
    //           method: "POST",
    //           body: formData
    //         })
    //           .then((response) => {
    //             return response.text();
    //           })
    //           .then((data) => {
    //             document.getElementById("data").innerHTML += data;
    //           });
    //       }
    //     });
    }

}

export default ImageUploader;