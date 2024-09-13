import { Models } from "appwrite"
import { Link } from "react-router-dom"

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
        <div className="flex-between">
            <div className="flex items-center gap-3">
                <Link to={``}>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PostCard