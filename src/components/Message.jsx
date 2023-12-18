import "../styles/Message.css";
import { FileTypeEnum } from "../utils";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactPlayer from "react-player";
dayjs.extend(relativeTime);

import { downloadData, getUrl } from "aws-amplify/storage";
import { useEffect, useState } from "react";

import { getText } from "../graphql/queries";

function Message(props) {
  const isMyMessage = props.message.userID === props.thisUserId;

  const [mediaSize, setMediaSize] = useState("small-media");
  const [mediaJsx, setMediaJsx] = useState(null);

  function generateImgJsx(imgPair) {
    return (
      <img
        className={`media-in-msg ${mediaSize}`}
        src={imgPair.src}
        onClick={() =>
          setMediaSize(
            mediaSize == "small-media" ? "full-media" : "small-media"
          )
        }
        alt={`img ${imgPair.key}`}
      />
    );
  }

  function generateVideoJsx(vidPair) {
    return (
      <video
        src={vidPair.src}
        className={`media-in-msg ${mediaSize}`}
        controls
        onClick={() =>
          setMediaSize(
            mediaSize == "small-media" ? "full-media" : "small-media"
          )
        }
      />
    );
  }

  function generateMediaJsx(mediaPair) {
    if (mediaPair.type == FileTypeEnum.IMAGE) {
      return generateImgJsx(mediaPair);
    } else if (mediaPair.type == FileTypeEnum.VIDEO) {
      return generateVideoJsx(mediaPair);
    }
  }

  function generateFileJsx(filePair) {
    return generateMediaJsx(filePair);
  }

  useEffect(()  => {
    let attachments = [];

    const renderMedia = async () => {

			const forceAddAttachments = async () => {
				const textData = await props.amplifyClient.graphql({
					query: getText,
					variables: { id: props.message.id},
				});
	
				props.message.Attachments.items = textData.data.getText.Attachments.items;
			}
	
			console.log(props.message.text, props.message.Attachments.items, props.message.hasAttachment);
	
			if (props.message.hasAttachment == true && props.message.Attachments.items.length == 0) {
				console.log("force adding attachments" , props.message.text);
				await forceAddAttachments();
			}


			console.log(props.message.text, props.message.Attachments.items.length, mediaJsx)
      if (props.message.Attachments.items.length != 0 && mediaJsx == null) {
        for (let attachment of props.message.Attachments.items) {
          if (attachment.type == FileTypeEnum.IMAGE) {
            const result = await downloadData({ key: attachment.storageKey })
              .result;
            const blob = await result.body.blob();
            const url = URL.createObjectURL(blob);
            attachments.push({ url: url, type: attachment.type });
          } else if (attachment.type == FileTypeEnum.VIDEO) {
            console.log(attachment.storageKey);
            // const url = await getUrl(attachment.storageKey, {"accessLevel": 'private'});
            attachments.push({
              url: `https://chatapp-storage-bucket212845-staging.s3.amazonaws.com/public/${attachment.storageKey.replace(
                / /g,
                "+"
              )}`,
              type: attachment.type,
            });
          }
        }

        const endPoint =
          attachments.length % 2 == 0
            ? attachments.length
            : attachments.length - 1;
        let attachmentGroups = [];

        for (let i = 0; i < endPoint; i += 2) {
          attachmentGroups.push([
            { src: attachments[i].url, type: attachments[i].type, key: i },
            {
              src: attachments[i].url,
              type: attachments[i].type,
              key: i + 1,
            },
          ]);
        }

        if (attachments.length % 2 != 0) {
          attachmentGroups.push([
            {
              src: attachments[attachments.length - 1].url,
              type: attachments[attachments.length - 1].type,
              key: attachments.length - 1,
            },
          ]);
        }

        setMediaJsx(
          attachmentGroups.map((attachmentGroup, idx) => {
            return (
              <div className="media-row" key={idx}>
                {generateFileJsx(attachmentGroup[0])}
                {attachmentGroup[1]
                  ? generateFileJsx(attachmentGroup[1])
                  : null}
              </div>
            );
          })
        );
      }
    };
    renderMedia();
  }, [mediaJsx, mediaSize, props.message.images]);

  return (
    <div className={`msg ${isMyMessage ? "my-msg" : "other-msg"}`}>
      {mediaJsx != null && mediaJsx}{" "}
      {/*<img src={imgLinks} className={`image-in-msg ${mediaSize}`} onClick={() => setMediaSize(mediaSize == "small-img" ? "full-img" : "small-img")} alt="" />} */}
      <div className="msg-text">{props.message.text}</div>
      <div className="msg-time">
        {dayjs(props.message.createdAt).fromNow(true)}
      </div>
    </div>
  );
}

export default Message;
