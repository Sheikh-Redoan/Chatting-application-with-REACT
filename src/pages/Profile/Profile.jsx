import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";
import profileBG from "../../assets/profilebarBG.jpg";
import user from "../../assets/user.JPG";
import userSide2 from "../../assets/usersideIcon2.png";
import { LuPencil } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
import { useSelector } from "react-redux";

const Profile = () => {
  const db = getDatabase();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Name");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("Email");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [number, setNumber] = useState("");
  const [contanrEemail, setContactEmail] = useState("");
  const [country, setCountry] = useState("");
  const data = useSelector(state => state.userDetails.userInfo);
  console.log(data.uid);
  
    const [userDetails, setUserDetails] = useState("");
  
    useEffect(() => {
      const UserRef = ref(db, "users/");
      
      onValue(UserRef, (snapshot) => {
        snapshot.forEach((item) => {
          const user = item.key;
          if (data.uid == user) {
            setUserDetails(item.val());
          }
        });
      });
    }, [data.uid, db]); 
  
    console.log(userDetails);
  

  const avatars = [
    {
      value: "avatar1",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/023/185/241/non_2x/3d-illustration-of-a-female-robot-with-neon-lights-on-her-face-ai-generative-image-free-photo.jpg",
    },
    {
      value: "avatar2",
      imageUrl:
        "https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136831.jpg?semt=ais_hybrid",
    },
    {
      value: "avatar3",
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/05/76/65/21/1000_F_576652108_8Nec2OmdXJXMDGFDchNjRMywqj4YrtzM.jpg",
    },
    {
      value: "avatar4",
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/05/76/65/21/1000_F_576652189_WK1JiTOwjKCFIJDJJLI1Q6RtwSfpgspu.jpg",
    },
  ];

  const crownImages = [
    "https://i.ibb.co.com/Y79YmFQ/weapons-2-removebg-preview-1.png",
    "https://i.ibb.co.com/QJJrXKG/weapons-2-removebg-preview-6.png",
    "https://i.ibb.co.com/J3pXg2y/weapons-2-removebg-preview-5.png",
    "https://i.ibb.co.com/TRD2GTR/weapons-2-removebg-preview-4.png",
    "https://i.ibb.co.com/YPp1zL3/weapons-2-removebg-preview-3.png",
    "https://i.ibb.co.com/V9Tq2Dp/weapons-2-removebg-preview-2.png",
  ];

  const colors = [
    "#00E7FEcc",
    "#F72D93",
    "#CC0100",
    "#9B1FE9",
    "#CFC614",
    "#F60",
  ];

  const [selectedCrown, setSelectedCrown] = useState(crownImages[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  // Handle the avatar selection
  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleNE = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCrownSelect = (imageUrl) => {
    setSelectedCrown(imageUrl);
  };

  // Handle the selection of color
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const updateProfileData = () => {
    const userId = data.uid; // User ID from redux store
  
    const userRef = ref(db, "users/" + userId);
  
    // Fetch the current user data
    const currentUserData = {
      username: name || data.username, // Use existing username if 'name' is empty
      email: email || data.email, // Use existing email if 'email' is empty
      profile_picture: selectedAvatar.imageUrl || data.profile_picture, // Use existing avatar if not selected
      dob: dob || data.dob, // Use existing DOB if not updated
      gender: gender || data.gender, // Use existing gender if not updated
      nationality: nationality || data.nationality, // Use existing nationality if not updated
      number: number || data.number, // Use existing number if not updated
      contact_email: contanrEemail || data.contact_email, // Use existing contact_email if not updated
      country: country || data.country, // Use existing country if not updated
      facebook: facebook || data.facebook, // Use existing facebook if not updated
      youtube: youtube || data.youtube, // Use existing youtube if not updated
      instagram: instagram || data.instagram, // Use existing instagram if not updated
      twitter: twitter || data.twitter, // Use existing twitter if not updated
      avatar: selectedAvatar.value || data.avatar, // Use existing avatar if not selected
      crown: selectedCrown || data.crown, // Use existing crown if not selected
      color: selectedColor || data.color, // Use existing color if not selected
    };
  
    // Only update the fields that have been changed
    const updatedData = {};
  
    // Add each changed field to the updatedData object
    for (let key in currentUserData) {
      if (currentUserData[key] !== data[key]) {
        updatedData[key] = currentUserData[key];
      }
    }
  
    // Perform the update operation with the updated data
    update(userRef, updatedData)
      .then(() => {
        console.log("User data updated successfully!");
        // Optionally, you can show a success message or redirect the user
      })
      .catch((error) => {
        console.error("Error updating user data: ", error);
        // Optionally, you can show an error message
      });
  };
  return (
    <div className="bg-[#1A1A1A] h-screen text-[#fff] relative">
      <Navbar className="fixed"></Navbar>
      <Container className="container-secoundary">
        <div className="w-[100%] h-screen shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] border border-solid border-[#BF7D0E] text-center overflow-hidden p-[20px]">
          <div className="relative">
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] border border-solid border-[#BF7D0E] w-full h-[250px] overflow-hidden">
              <img
                src={profileBG}
                className="w-full h-[100%] object-cover"
                alt=""
              />
            </div>
            <div className="flex absolute bottom-[-50px] left-[50px]">
              <div className="relative">
                <div className="w-[200px] h-[200px] bg-[#00E7FE] aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)] border-[2px] border-white shadow-regal">
                  <img
                    src={selectedAvatar.imageUrl}
                    alt="Selected Avatar"
                    className="aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]"
                  />
                </div>

                <div
                  className="w-[60px] h-[60px] rounded-full absolute top-[7px] right-[3px] flex justify-center items-center"
                  style={{ backgroundColor: selectedColor }}
                >
                  <img
                    src={selectedCrown}
                    alt="Selected Crown"
                    className="w-[40px]"
                  />
                </div>
              </div>
            </div>
            <span className="w-[50px] h-[50px] text-[25px] rounded-full flex justify-center items-center ml-[10px] border border-white absolute top-[20px] right-[20px]">
              <LuPencil />
            </span>
          </div>
          <div className="flex gap-[30px]">
            <div>
              <div className="w-[350px] h-[146px] mt-[70px] p-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] relative">
                {/* Title */}
                <h3 className="text-white text-center text-[35px] not-italic font-normal leading-[normal] font-rus mb-[10px]">
                  {isEditing ? (
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    />
                  ) : (
                    name
                  )}
                </h3>

                {/* Email */}
                <p className="text-[#E5DFDF] text-[18px] not-italic font-light leading-[normal] font-pops">
                  {isEditing ? (
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className=" bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    />
                  ) : (
                    email
                  )}
                </p>

                {/* Pencil icon to trigger editing mode */}
                <span
                  onClick={handleNE}
                  className="w-[50px] h-[50px] text-[25px] rounded-full flex justify-center items-center ml-[10px] border border-white absolute top-[-15px] right-[-15px]"
                >
                  <LuPencil />
                </span>
              </div>
              <div>
                <div className="flex justify-center items-center gap-x-[15px]">
                  <a
                    href="#"
                    className="w-[45px] h-[45px] bg-[#ff6600] flex justify-center items-center rounded shadow-10xl text-[#000] text-[30px] mt-[10px]"
                  >
                    <FaFacebook />
                  </a>
                  <input
                    type="text"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    placeholder="Enter Facebook Link"
                  />
                </div>

                <div className="flex justify-center items-center gap-x-[15px]">
                  <a
                    href="#"
                    className="w-[45px] h-[45px] bg-[#ff6600] flex justify-center items-center rounded shadow-10xl text-[#000] text-[30px] mt-[10px]"
                  >
                    <FaYoutube />
                  </a>
                  <input
                    type="text"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    placeholder="Enter YouTube Link"
                  />
                </div>

                <div className="flex justify-center items-center gap-x-[15px]">
                  <a
                    href="#"
                    className="w-[45px] h-[45px] bg-[#ff6600] flex justify-center items-center rounded shadow-10xl text-[#000] text-[30px] mt-[10px]"
                  >
                    <FaInstagram />
                  </a>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    placeholder="Enter Instagram Link"
                  />
                </div>

                <div className="flex justify-center items-center gap-x-[15px]">
                  <a
                    href="#"
                    className="w-[45px] h-[45px] bg-[#ff6600] flex justify-center items-center rounded shadow-10xl text-[#000] text-[30px] mt-[10px]"
                  >
                    <FaXTwitter />
                  </a>
                  <input
                    type="text"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    placeholder="Enter Twitter Link"
                  />
                </div>
              </div>
            </div>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] border border-solid border-[#BF7D0E] w-[814px] mt-[20px] p-[30px]  flex ">
              <div className="font-pops">
                <h2 className="text-white text-[25px] not-italic font-normal mb-[10px] text-left leading-[normal]">
                  Personal Information
                </h2>

                <div className="flex gap-[23px] justify-between items-center mb-[10px] w-[426px]">
                  <p className="text-white text-center text-lg not-italic font-normal leading-[normal]">
                    Date of birth:
                  </p>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                  />
                </div>

                <div className="flex gap-[23px] justify-between items-center mb-[10px] w-[426px]">
                  <p className="text-white text-center text-lg not-italic font-normal leading-[normal]">
                    Gender:
                  </p>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex gap-[23px] justify-between items-center mb-[10px] w-[426px]">
                  <p className="text-white text-center text-lg not-italic font-normal leading-[normal]">
                    Nationality:
                  </p>
                  <input
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    placeholder="Enter your nationality"
                  />
                </div>

                <div className="flex gap-[23px] justify-between items-center mb-[10px] w-[426px]">
                  <p className="text-white text-center text-lg not-italic font-normal leading-[normal]">
                    Number:
                  </p>
                  <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    placeholder="Enter your number"
                  />
                </div>

                <div className="flex gap-[23px] justify-between items-center mb-[10px] w-[426px]">
                  <p className="text-white text-center text-lg not-italic font-normal leading-[normal]">
                    Email:
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex gap-[23px] justify-between items-center mb-[10px] w-[426px]">
                  <p className="text-white text-center text-lg not-italic font-normal leading-[normal]">
                    Country:
                  </p>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] text-[#6C6C6C] rounded-[10px] text-[20px] not-italic font-normal leading-[normal] font-rus px-[15px] py-[4px] w-[283px]"
                    placeholder="Enter your country"
                  />
                </div>
              </div>
              <div className="ml-[10px]">
                <div>
                  <h2 className="text-white text-[25px] not-italic font-normal mb-[10px] text-left leading-[normal]">
                    Select Avatar
                  </h2>
                  <div className="flex gap-[5px]">
                    {avatars.map((avatar) => (
                      <div
                        key={avatar.value}
                        className="w-[60px] h-[60px] bg-[#FCEF02] aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)] border-[2px] border-white cursor-pointer"
                        onClick={() => handleAvatarSelect(avatar)}
                      >
                        <img
                          src={avatar.imageUrl}
                          alt={avatar.value}
                          className="aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]"
                        />
                      </div>
                    ))}
                  </div>

                  <h2 className="text-white text-[25px] not-italic font-normal mb-[10px] text-left leading-[normal] mt-[15px]">
                    Select Crown
                  </h2>
                  <div className="flex gap-[5px]">
                    {crownImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Crown ${index + 1}`}
                        className="w-[40px] cursor-pointer"
                        onClick={() => handleCrownSelect(image)}
                      />
                    ))}
                  </div>

                  {/* Select Color */}
                  <h2 className="text-white text-[25px] not-italic font-normal mb-[10px] text-left leading-[normal] mt-[15px]">
                    Select Colour
                  </h2>
                  <div className="flex gap-[5px]">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-[35px] h-[35px] rounded-full cursor-pointer"
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorSelect(color)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <a
              href="#"
              onClick={updateProfileData} // Call the update function when the button is clicked
              className="text-white text[18px] not-italic font-normal leading-[normal] font-pops px-[45px] py-[10px]  bg-gradient-to-r from-[#F60] to-[#FFA300] inline-flex justify-center items-center rounded-[40px] mt-[10px] mr-[30px]"
            >
              Save
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
