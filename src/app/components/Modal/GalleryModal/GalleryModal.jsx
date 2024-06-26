/* eslint-disable @next/next/no-img-element */
import React from "react";
import {Dialog} from "@material-tailwind/react";
import {IoMdArrowRoundBack} from "react-icons/io";
const GalleryModal = ({images, showModal, setShowModal}) => {
    const galleryImages = images.filter(
        (img) => !img.is_featured && !img.is_showcased
    );
    return (
        <Dialog
            open={showModal}
            size="xxl"
            animate={{
                mount: {scale: 1, y: 0},
                unmount: {scale: 0.9, y: -100},
            }}>
            <div className="container ">
                <IoMdArrowRoundBack
                    onClick={() => setShowModal(false)}
                    size={25}
                    className="my-5 "
                />

                <div className="max-w-4xl mx-auto overflow-auto pb-8 max-h-[88vh]">
                    <div className="grid gap-4 md:grid-cols-2">
                        {galleryImages?.map((img, i) => (
                            <div
                                key={i}
                                className={`${
                                    i == 0 ||
                                    i == 3 ||
                                    i == 6 ||
                                    i == 9 ||
                                    i == 11 ||
                                    i == 14
                                        ? "md:col-span-2"
                                        : ""
                                } `}>
                                <img
                                    className={`max-h-[450px] w-full rounded-lg object-cover object-center ${
                                        i == 0 ||
                                        i == 3 ||
                                        i == 6 ||
                                        i == 9 ||
                                        i == 11 ||
                                        i == 14
                                            ? "max-h-[450px]"
                                            : "h-[300px]"
                                    }  `}
                                    src={img.image}
                                    alt="gallery-photo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default GalleryModal;
