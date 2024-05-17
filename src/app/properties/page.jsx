"use client";
import React from "react";
import Loading from "../profile_page/loading";
import {useGetAllPropertiesQuery} from "@/redux/api/propertyApi";
import {usePathname} from "next/navigation";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import Filter from "../components/Filter/Filter";
import Category from "../components/Filter/Category";
import Skalaton from "../components/Skalation/Skalaton";

const PropertyPage = () => {
    const path = usePathname();
    const {data: properties, isLoading} = useGetAllPropertiesQuery();

    if (isLoading) return <Loading />;

    return (
        <div className="container">
            <Category />
            <div>
                <div className="mt-20">
                    <Filter />
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
                    {!isLoading ? (
                        <>
                            {properties?.map((dt, i) => (
                                <PropertyCard
                                    path={path}
                                    key={i}
                                    property={dt}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <Skalaton />
                            <Skalaton />
                            <Skalaton />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PropertyPage;
