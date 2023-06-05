import { useRouter } from "next/router";

const video = () => {
  // use router for dinamic id
  const router = useRouter();  
  return (
      <div>{router.query.videoId}</div>
    );
}
export default video;