import Image from "next/image";
import Link from "next/link";
import dateDiff from "../helpers/dateDiff";

const PostCard = ({ ...props }) => {

    const textEllipsis = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + "...";
        }
        return text;
    }

    return (
        <div className="max-w-xs flex-shrink-0 cursor-pointer">
            <Link href={`/posts/${props.slug}`}>
                <div className="flex flex-col space-y-1">
                    <Image fill="true" className="rounded-lg" width={320} height={150} src="https://picsum.photos/320/150" />
                    <h4 className="font-bold text-gray-900 text-lg leading-5">{textEllipsis(props.title, 46)}</h4>
                    <div className="flex items-center space-x-2">
                        <Link href="/">
                            <a className="text-blue-400 text-sm">{props.category}</a>
                        </Link>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-600">{dateDiff(props.createdAt)}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default PostCard;