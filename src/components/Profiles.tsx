type Profile = {
  name: string;
  username: string;
  link: string;
};

const profiles: Profile[] = [
  {
    name: "GitHub",
    username: "anshukrra07",
    link: "https://github.com/anshukrra07"
  },
  {
    name: "LeetCode",
    username: "himanshu_4566",
    link: "https://leetcode.com/u/himanshu_4566/"
  },
  {
    name: "LinkedIn",
    username: "Himanshu Kumar",
    link: "https://www.linkedin.com/in/himanshu-kumar-75914432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  }
];

export default function Profiles() {
  return (
    <section className="profiles-section">
      <h2>Coding Profiles</h2>
      <p className="section-subtitle">
        Platforms where I actively build, solve problems, and collaborate.
      </p>

      <div className="profiles-grid">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            className="profile-card"
          >
            <h3>{profile.name}</h3>
            <p>@{profile.username}</p>
          </a>
        ))}
      </div>
    </section>
  );
}