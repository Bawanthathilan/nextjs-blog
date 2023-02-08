import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";
import Image from "next/image";

const getPostMetaData = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const posts = markdownFiles.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      thumbnail: matterResult.data.thumbnail,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <Link href={`/posts/${post.slug}`}>
      <div className="bg-white px-2 py-2 rounded-lg flex flex-col ">
        <div className="relative w-full h-44 ">
          <Image
            src={post.thumbnail}
            alt={post.title}
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>

        <h2 className=" text-2xl text-slate-500 font-bold  mt-5">
          {post.title}
        </h2>

        <div className="desc">
          <p className="text-slate-500 text-sm mt-2">{post.subtitle}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="pt-5">
      <div className="title">
        <h1 className=" text-green-500 text-5xl font-thin ">
          Latest Blog Articles
        </h1>
      </div>

      {postPreviews.length > 0 ? (
        <>
          <div className="grid grid-cols-3 gap-5 mt-10 ">{postPreviews}</div>
        </>
      ) : (
        <p>No Posts</p>
      )}
    </div>
  );
};

export default HomePage;
