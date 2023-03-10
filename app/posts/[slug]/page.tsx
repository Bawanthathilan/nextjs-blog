import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult.content;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <div>
      <p>This is the post : {slug}</p>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default PostPage;
