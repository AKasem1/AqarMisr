const imgUpload = async (image) => {
    const key = process.env.NEXT_PUBLIC_IMG_UPLOAD_KEY; // Make sure the key is accessible
    console.log("key: ", key);
  
    // Create a FormData object and append the image file and key
    const formData = new FormData();
    formData.append('image', image);
    formData.append('key', key);
  
    try {
      // Send the POST request without `mode: 'no-cors'`
      const response = await fetch('https://api.imgbb.com/1/upload?expiration=600', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }
  
      // Parse the JSON response if the status is okay
      const data = await response.json();
      console.log(data);
  
      if (data?.data?.url) {
        console.log('Image URL:', data.data.url); // Image URL
        return data.data.url;
      } else {
        console.error('Unexpected response format:', data);
      }
  
    } catch (error) {
      console.error('Error during image upload:', error);
    }
  };
  
  export default imgUpload;
  