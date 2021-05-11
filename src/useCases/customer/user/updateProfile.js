module.exports = function makeUpdateProfile ({ userdb }) {
  return async function updateProfile(profileData,userId) {
    let data;
    if (profileData.name) data.name = profileData.name;
    if (profileData.lastname) data.lastname = profileData.lastname;
    if (profileData.phone) data.phone = profileData.phone;
    if (profileData.address) data.address.address = profileData.address;
    if (profileData.address2) data.address.address2 = profileData.address2;
    if (profileData.zip) data.address.zip = profileData.zip;
    if (profileData.city) data.address.city = profileData.city;
    if (profileData.country) data.address.country = profileData.country;
    if (profileData.company) data.company = profileData.company;
    if (profileData.nationalid) data.nationalid = profileData.nationalid;
    if (profileData.colnum) data.colnum = profileData.colnum;
    if (!data) {
      throw new Error('No ha habido cambios en el perfil que aplicar.');
    }
    const user = await userdb.update(userId,profile);
    return user;
  }
}