
import { supabase } from '../../supabase';


const uploadFile = async (file, pathPrefix) => {
   
    if (!file) {
        console.error("No file provided.");
        return null;  // Return null or handle as needed
    }
    // file.name;
    const fileName =  Date.now()-file.name;
    const fileExt = fileName.split('.').pop();  // This line will work safely now
    const filePath = `${pathPrefix}/${Date.now()}.${fileExt}`;

    const { error: uploadError } = await 
    supabase.storage
        .from('profileuploads')
        .upload(filePath, file);

    if (uploadError) {
        console.error("Upload error:", uploadError);
        return null;
    }

    const { data: publicUrlData } = supabase
        .storage
        .from('profileuploads')
        .getPublicUrl(filePath);

    return publicUrlData.publicUrl;

   
};


export const SubmitProfile = async ({ formData, files, photo }) => {
    const {
        data: { user },
        error: userError
    } = await supabase.auth.getUser();

    if (userError || !user) {
        return { success: false, message: "User not authenticated" };
    }
  
    // Upload each file
    const pmcUrl = await uploadFile(files.pmcCertificate, `certificates/${user.id}`);
    const houseJobUrl = await uploadFile(files.houseJobCertificate, `certificates/${user.id}`);
    const cnicFrontUrl = await uploadFile(files.cnicFront, `cnic/${user.id}`);
    const cnicBackUrl = await uploadFile(files.cnicBack, `cnic/${user.id}`);
    const photoUrl = await uploadFile(photo, `avatars/${user.id}`);

    // Insert record in Supabase table
    const { error } = await supabase
        .from('ProfileforApproval')
        .insert([{
            id: user.id,
            name: formData.name,
            gender: formData.gender,
            experience: formData.experience,
            email: formData.email,
            phone: formData.phone,
            cnic: formData.cnic,
            specialization: formData.specialization,
            clinicLocation: formData.location,
            pmcCertificateUrl: pmcUrl,
            housejobCertUrl: houseJobUrl,
            cnicFrontUrl: cnicFrontUrl,
            cnicBackUrl: cnicBackUrl,
            photoUrl: photoUrl
        }]);

    if (error) {
        console.error("Insert error:", error);
        return { success: false, message: "Failed to submit profile" };
    }

    return { success: true, message: "Profile submitted successfully!" };
};
