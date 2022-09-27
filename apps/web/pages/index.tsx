import { Button } from "ui";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
export default function Web(props: any) {
  return (
    <div>
      <h1 className="text-red-300">{props.a ?? "Web"}</h1>
      <Button />
    </div>
  );
}

// export async function getServerSideProps(context: any) {
//   return {
//     props: {
//       a: "Server",
//     }, // will be passed to the page component as props
//   };
// }

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      a: "Static",
    }, // will be passed to the page component as props
  };
};
