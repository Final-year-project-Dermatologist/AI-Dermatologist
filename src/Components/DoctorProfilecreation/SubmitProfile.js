import { supabase } from '../../supabase';

export const submitProfileToSupabase = async (formData, uploadFiles, userId) => {
  const timestamp = Date.now();

  const uploadToStorage = async (file, label) => {
    const filePath = `profiles/${timestamp}_${label}`;
    const { data, error } = await supabase.storage
      .from('profileuploads')
      .upload(filePath, file);
    if (error) {
      console.error(`Error uploading ${label}:`, error.message);
      return null;
    }
    const { data: publicUrlData } = supabase
      .storage
      .from('profileuploads')
      .getPublicUrl(filePath);
    return publicUrlData.publicUrl;
  };

  const pmcCertificateUrl = await uploadToStorage(uploadFiles.pmcCertificate, 'pmc_certificate');
  const housejobCertUrl = await uploadToStorage(uploadFiles.houseJobCertificate, 'house_job_certificate');
  const cnicFrontUrl = await uploadToStorage(uploadFiles.cnicFront, 'cnic_front');
  const cnicBackUrl = await uploadToStorage(uploadFiles.cnicBack, 'cnic_back');
  const photoUrl = await uploadToStorage(uploadFiles.profilePhoto, 'profile_photo');

  const { error } = await supabase.from('ProfileforApproval').insert([{
    ...formData,
    id: userId,
    approvalStatus:"pending",
    pmcCertificateUrl,
    housejobCertUrl,
    cnicFrontUrl,
    cnicBackUrl,
    photoUrl
  }]);

  return error;
};
